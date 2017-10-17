#should be in app folder "app/schema.py"
from graphene_django import DjangoObjectType #required for Query
from graphene import AbstractType, relay, String #required for mutation
import graphene

class User(DjangoObjectType):
	class Meta:
		model = UserModel #creating Meta class that references model will automatically explose all fields

class Query(graphene.ObjectType):
	users = graphene.List(User)

	@graphene.resolve_only_args
	def resolve_users(self):
		return UserModel.objects.all()

class UserMutation(relay.ClientIDMutation):
	class Input:
		name = String()
		last_name = String()

	user = Field(UserNode)

	@classmethod
	def mutate_and_get_payload(cls, input, context, info):
		name = input.get('name', None)
		last_name = input.get('last_name', None)

		user = UserModel.objects.create(name = name, last_name = last_name)

		return UserMutation(user=user)

class Mutation(AbstractType):
	user_mutate = UserMutation.Field()


