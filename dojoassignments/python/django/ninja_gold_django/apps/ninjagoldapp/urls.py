from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'process_money/(?P<money_method>\w{0,50})$', views.process_money, name='process_money'),
    url(r'restart$', views.restart, name='restart')
]

