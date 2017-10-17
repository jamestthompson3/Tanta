from wallet.models import Wallet, Transactions
from .serializers import WalletSerializer
from rest_framework import generics
from rest_framework import mixins
# from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import FileUploadParser,MultiPartParser,FormParser,JSONParser


# Returns the Wallet for a given User
class WalletDetail(mixins.RetrieveModelMixin,
                 mixins.UpdateModelMixin,
                 mixins.DestroyModelMixin,
                 generics.GenericAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer
    parser_classes = (MultiPartParser,FormParser,JSONParser,)
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
