from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class UserVO(models.Model):
    user_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return str(self.user_name)


class Movie(models.Model): 
    # imdb_id is from the API
    imdb_id = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Review(models.Model):
    title = models.CharField(max_length=200)
    post = models.TextField(blank=True, null=True)
    movie = models.ForeignKey("Movie", related_name= "Review", on_delete=models.CASCADE)  
    rating = models.PositiveSmallIntegerField(blank=True, null=True,
        validators=[MinValueValidator(1),MaxValueValidator(5)]
    )
    date = models.DateField(auto_now=True)
    user = models.ForeignKey("UserVO", related_name="Review", on_delete=models.CASCADE)


    def __str__(self):
        return str(self.user.user_name) + " review for " + str(self.movie.title)
