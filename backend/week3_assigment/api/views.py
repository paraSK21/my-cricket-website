from django.shortcuts import render, redirect
from .models import UserModel

def admin_auth(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        try:
            username = request.POST['username']
            password = request.POST['password']
            user = UserModel.objects.get(username = username)
            if user.password == password:
                return render(request, 'home.html')
            else:
                return redirect('admin-auth')
        except:
            return redirect('admin-auth')