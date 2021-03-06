from django.conf.urls import patterns, include, url
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import RedirectView

from api.views import *
from client.views import *

urlpatterns = patterns('',
    # Examples:

    url(r'^admin/', include(admin.site.urls)),
    # url(r'^$', index_view, name='index-view'),
    url(r'^$', RedirectView.as_view(url='app/index.html', permanent=False), name='index-view'),
    url(r'^raw$', raw_view, name='raw'),

    url(r'^api/wine_list$', api_wine_list, name='api-wine-list'),
    url(r'^api/wine_update$', api_wine_update, name='api-wine-update'),
    url(r'^api/wine_detail/(?P<wine_id>\d+)$', api_wine_detail, name='api-wine-detail'),

    url(r'^upload/', upload_file_view, name='upload-file'),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


