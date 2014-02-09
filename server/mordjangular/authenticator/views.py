from django.http import HttpResponse
from django.shortcuts import redirect
#from django.shortcuts import render_to_response

def index(request):
	return redirect('/static/front/index.html')
    #return render_to_response('index.html')
    #return HttpResponse("Hello, world. You're at the authenticator index.")


