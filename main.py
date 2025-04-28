import smtplib, ssl
from dotenv import load_dotenv
import os
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email import encoders
import pandas as pd
from string import Template
from datetime import datetime, timedelta

load_dotenv()

port = os.getenv("SERVER_PORT")
smtp_server = os.getenv("SMTP_SERVER")
sender_email = os.getenv("SENDER_EMAIL")
password = os.getenv("EMAIL_PASSWORD")

df = pd.read_csv("credentials copy.csv")

with open("email_template.html", "r") as file:
    email_body = file.read()

# pdf_path = "TrustBridge Bank Security Verification Process.pdf"
# with open(pdf_path, "rb") as pdf:
#     part = MIMEBase("application", "pdf")
#     part.set_payload(pdf.read())
#     encoders.encode_base64(part)
#     part.add_header(
#         "Content-Disposition", f"attachment; filename={os.path.basename(pdf_path)}"
#     )

with open("email_template.html", "r") as file:
    template_content = file.read()


# body = MIMEText(email_body, "html")
# emails = []
# with open("emails.txt", "r") as file:
#     for email in file.readlines():
#         print(f"Sending to {email}")
#         msg = MIMEMultipart()
#         msg["FROM"] = f"TrustBridge Bank <{sender_email}>"
#         msg["TO"] = email
#         msg["SUBJECT"] = (
#             "TrustBridge Bank - URGENT: Security Alert - Immediate Action Required"
#         )
#         msg.attach(body)

#         context = ssl.create_default_context()
#         with smtplib.SMTP(smtp_server, port) as server:
#             server.starttls(context=context)
#             server.login(sender_email, password)
#             server.sendmail(sender_email, email, msg.as_string())

#         print(f"Done Sending to {email}")
#         print

template = Template(template_content)
time = datetime.now() - timedelta(hours=3, minutes=10)
time = time.strftime("%B %d, %Y at %I:%M %p")
for i, r in df.iterrows():
    email = r["email"]
    name = r["name"]
    print(f"Sending to {email}")
    msg = MIMEMultipart()
    msg["FROM"] = f"TrustBridge Bank <{sender_email}>"
    msg["TO"] = email
    msg["SUBJECT"] = (
        "TrustBridge Bank - URGENT: Security Alert - Immediate Action Required"
    )
    html_content = template.substitute({"name": name, "time": time})
    body = MIMEText(html_content, "html")
    msg.attach(body)

    context = ssl.create_default_context()
    with smtplib.SMTP(smtp_server, port) as server:
        server.starttls(context=context)
        server.login(sender_email, password)
        server.sendmail(sender_email, email, msg.as_string())

    print(f"Done Sending to {email}")
    print
