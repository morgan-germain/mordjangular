from django.conf.urls import patterns, url

from authenticator import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
)
