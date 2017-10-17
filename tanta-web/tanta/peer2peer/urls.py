from django.conf.urls import url
from peer2peer import views

urlpatterns=[
	url(r'^$',views.p2p,name='p2phome'),
	url(r'^borrow_lend/ajax',views.get_borrow,name='get_borrow'),
	url(r'^borrow_lend/modalshow',views.modal_show,name='modalshow'),
	url(r'^api/$',views.api,name="api")
]
