from django.shortcuts import render
from django.views import View


class SchoolMainView(View):
    def get(self, request):
        return render(request, 'school/main.html')
