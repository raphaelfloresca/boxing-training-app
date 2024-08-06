import { ApolloServer, BaseContext } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { mergeSchemas } from '@graphql-tools/schema'
import userSchema from "graphql/users/schema"
import logSchema from "graphql/logs/schema"
import workoutSchema from "graphql/workouts/schema"
import dbConnect from "middleware/db-connect"
import { NextResponse, NextRequest } from 'next/server'

const mergedSchema = mergeSchemas({
  schemas: [
    userSchema,
    logSchema,
    workoutSchema
  ],
});

const server = new ApolloServer<BaseContext>({
  schema: mergedSchema
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async () => {
    const token = {};
    return { token };
  },
});

async function corsHandler(req: NextRequest) {
  const headers = new Headers();
  headers.set("Allow", "POST");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST");
  headers.set("Access-Control-Allow-Headers", "*");
  headers.set("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  return headers;
}

async function dbHandler(req: NextRequest) {
  await dbConnect();
  return req;
}

export async function GET(req: NextRequest) {
  const headers = await corsHandler(req);
  await dbHandler(req);
  return handler(req);
}

export async function POST(req: NextRequest) {
  const headers = await corsHandler(req);
  await dbHandler(req);
  return handler(req);
}
