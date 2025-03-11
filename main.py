import smtplib, ssl
from dotenv import load_dotenv
import os

load_dotenv()

port = os.getenv("SERVER_PORT")
smtp_server = os.getenv("SMTP_SERVER")
sender_email = os.getenv("SENDER_EMAIL")
receiver_email = "leoanthony.cortez@lorma.edu"
password = os.getenv("EMAIL_PASSWORD")

message = """\
Subject: testing puposes

this is a test email using python as target:
    pass
    """


context = ssl.create_default_context()
with smtplib.SMTP(smtp_server, port) as server:
    server.starttls(context=context)
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)
