from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^secrets$', views.secrets, name='secrets'),
    url(r'^handle_secrets$', views.handle_secrets, name='handle_secrets'),
    url(r'^delete_secrets/(?P<secret_id>\d+)/(?P<source>\w+)$', views.delete_secrets, name='delete_secrets'),
    url(r'^like_secrets/(?P<secret_id>\d+)/(?P<source>\w+)$', views.like_secrets, name='like_secrets'),
    url(r'^hall_of_fame$', views.hall_of_fame, name='hall_of_fame'),
]