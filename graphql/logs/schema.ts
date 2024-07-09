import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import Logs from "mongoose/logs/model";

const customizationOptions = {};
let LogTC;

if (schemaComposer.has('logs')) {
  LogTC = schemaComposer.getOTC('logs');
} else {
  LogTC = composeMongoose(Logs, customizationOptions);
}

schemaComposer.Query.addFields({
    logById: LogTC.mongooseResolvers.findById(),
    logByIds: LogTC.mongooseResolvers.findByIds(),
    logOne: LogTC.mongooseResolvers.findOne(),
    logMany: LogTC.mongooseResolvers.findMany(),
    logDataLoader: LogTC.mongooseResolvers.dataLoader(),
    logDataLoaderMany: LogTC.mongooseResolvers.dataLoaderMany(),
    logByIdLean: LogTC.mongooseResolvers.findById({ lean: true }),
    logByIdsLean: LogTC.mongooseResolvers.findByIds({ lean: true }),
    logOneLean: LogTC.mongooseResolvers.findOne({ lean: true }),
    logManyLean: LogTC.mongooseResolvers.findMany({ lean: true }),
    logDataLoaderLean: LogTC.mongooseResolvers.dataLoader({ lean: true }),
    logDataLoaderManyLean: LogTC.mongooseResolvers.dataLoaderMany({ lean: true }),
    logCount: LogTC.mongooseResolvers.count(),
    logConnection: LogTC.mongooseResolvers.connection(),
    logPagination: LogTC.mongooseResolvers.pagination(),
  });
  
  schemaComposer.Mutation.addFields({
    logCreateOne: LogTC.mongooseResolvers.createOne(),
    logCreateMany: LogTC.mongooseResolvers.createMany(),
    logUpdateById: LogTC.mongooseResolvers.updateById(),
    logUpdateOne: LogTC.mongooseResolvers.updateOne(),
    logUpdateMany: LogTC.mongooseResolvers.updateMany(),
    logRemoveById: LogTC.mongooseResolvers.removeById(),
    logRemoveOne: LogTC.mongooseResolvers.removeOne(),
    logRemoveMany: LogTC.mongooseResolvers.removeMany(),
  });
  

const schema = schemaComposer.buildSchema();
export default schema;