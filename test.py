import pandas as pd
from datetime import datetime

# df = pd.read_csv("credentials.csv")

# for i, r in df.iterrows():
#     print(r["name"])
now = datetime.now()

now = now.strftime("%B %d, %Y at %I:%M %p")

print(now)
