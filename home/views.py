from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
import urllib
from rest_framework.throttling import AnonRateThrottle
# Create your views here.

HOST = "https://api.stackexchange.com/2.2/search/advanced"


class AnonMinThrottle(AnonRateThrottle):
    scope = 'anon_min'


class AnonDayThrottle(AnonRateThrottle):
    scope = 'anon_day'


class Index(APIView):
    throttle_classes = [AnonMinThrottle, AnonDayThrottle]

    @method_decorator(cache_page(60*2))
    def get(self, request, format=None):
        data = {"site": "stackoverflow"}
        for i in request.GET:
            data[i] = request.GET[i]
        params = urllib.parse.urlencode(data)
        res = requests.get(f"{HOST}?{params}")
        print("request made")
        return Response(res.json()["items"])
        # return Response(data)
