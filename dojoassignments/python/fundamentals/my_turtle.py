import turtle

def draw_square():

    window = turtle.Screen()
    window.bgcolor("green")

    michael = turtle.Turtle()
    michael.shape("arrow")
    michael.color("red")
    michael.speed(3)

    michael.forward(100)
    michael.right(90)
    michael.forward(100)
    michael.right(90)
    michael.forward(100)
    michael.left(90)
    michael.forward(100)
    michael.left(90)
    michael.forward(800)

    window.exitonclick()
draw_square()