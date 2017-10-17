from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.core import serializers
from peer2peer.models import Borrow, Lend
# Create your views here.
def p2p(request):
	return render(request,"index.html")

def api(request):
	return HttpResponse(request.user)

# AJAX REQUESTS
def get_borrow(request):
	view_type=request.GET["tab_type"]
	if view_type == 'Borrow':
		query=Borrow.objects.filter(user=request.user)
	else:
		query=Lend.objects.filter(user=request.user)
	data=serializers.serialize('json',query)
	return HttpResponse(data,'json')

def modal_show(request):
	tab_type=request.GET["tab_type"]
	id_number=request.GET["id_no"]
	if tab_type == 'Borrow':
		query=Borrow.objects.filter(user=request.user,pk=id_number)
	else:
		query=Lend.objects.filter(user=request.user,pk=id_number)
	data=serializers.serialize('json',query)
	return HttpResponse(data,'json')
