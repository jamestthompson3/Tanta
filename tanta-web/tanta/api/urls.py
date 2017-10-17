from django.conf.urls import url
from api import views
from rest_framework.urlpatterns import format_suffix_patterns
app_name='api'

urlpatterns=[
url(r'^wallets/(?P<pk>[0-9]+)/$',views.WalletDetail.as_view()),

]
urlpatterns = format_suffix_patterns(urlpatterns)