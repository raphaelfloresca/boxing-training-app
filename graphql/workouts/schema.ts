import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import Workouts from "mongoose/workouts/model";

const customizationOptions = {};
let WorkoutTC;

if (schemaComposer.has('workouts')) {
  WorkoutTC = schemaComposer.getOTC('workouts');
} else {
  WorkoutTC = composeMongoose(Workouts, customizationOptions);
}

schemaComposer.Query.addFields({
    workoutById: WorkoutTC.mongooseResolvers.findById(),
    workoutByIds: WorkoutTC.mongooseResolvers.findByIds(),
    workoutOne: WorkoutTC.mongooseResolvers.findOne(),
    workoutMany: WorkoutTC.mongooseResolvers.findMany(),
    workoutDataLoader: WorkoutTC.mongooseResolvers.dataLoader(),
    workoutDataLoaderMany: WorkoutTC.mongooseResolvers.dataLoaderMany(),
    workoutByIdLean: WorkoutTC.mongooseResolvers.findById({ lean: true }),
    workoutByIdsLean: WorkoutTC.mongooseResolvers.findByIds({ lean: true }),
    workoutOneLean: WorkoutTC.mongooseResolvers.findOne({ lean: true }),
    workoutManyLean: WorkoutTC.mongooseResolvers.findMany({ lean: true }),
    workoutDataLoaderLean: WorkoutTC.mongooseResolvers.dataLoader({ lean: true }),
    workoutDataLoaderManyLean: WorkoutTC.mongooseResolvers.dataLoaderMany({ lean: true }),
    workoutCount: WorkoutTC.mongooseResolvers.count(),
    workoutConnection: WorkoutTC.mongooseResolvers.connection(),
    workoutPagination: WorkoutTC.mongooseResolvers.pagination(),
  });
  
  schemaComposer.Mutation.addFields({
    workoutCreateOne: WorkoutTC.mongooseResolvers.createOne(),
    workoutCreateMany: WorkoutTC.mongooseResolvers.createMany(),
    workoutUpdateById: WorkoutTC.mongooseResolvers.updateById(),
    workoutUpdateOne: WorkoutTC.mongooseResolvers.updateOne(),
    workoutUpdateMany: WorkoutTC.mongooseResolvers.updateMany(),
    workoutRemoveById: WorkoutTC.mongooseResolvers.removeById(),
    workoutRemoveOne: WorkoutTC.mongooseResolvers.removeOne(),
    workoutRemoveMany: WorkoutTC.mongooseResolvers.removeMany(),
  });
  

const schema = schemaComposer.buildSchema();
export default schema;