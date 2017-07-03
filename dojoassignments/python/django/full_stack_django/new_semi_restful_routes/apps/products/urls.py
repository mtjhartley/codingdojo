from django.conf.urls import url
from . import views


app_name='products'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^/new$', views.new, name='new'),
    url(r'^/create$', views.create, name='create'),
    url(r'^/(?P<product_id>\d+)$', views.show, name='show'),
    url(r'^/(?P<product_id>\d+)/edit$', views.edit, name='edit'),
    url(r'^/(?P<product_id>\d+)/update$', views.update, name='update'),
    url(r'^/(?P<product_id>\d+)/destroy$', views.destroy, name='destroy'),
]