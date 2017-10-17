# Root project schema (project/schema.py)
import app.schema
import graphene

class Query(app.schema.Query, graphene.ObjectType):
	pass

class Mutation(app.schema.Mutation, grapheneObjectType):
	pass