from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mordjangular.views.home', name='home'),
    # url(r'^mordjangular/', include('mordjangular.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)

# Authenticator app
urlpatterns += patterns('',
	url(r'^$', include('authenticator.urls')),
	url(r'^authenticator/', include('authenticator.urls')),
)


# Metier actions
#urlpatterns += patterns('hub.ctrl.metier',
#    url(r'^metier/report/$', 'report'),
#    url(r'^metier/file/upload/$', 'upload'),
#    url(r'^metier/file/delete/$', 'delete'),
#)