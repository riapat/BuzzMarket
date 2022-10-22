
import cgitb 
cgitb.enable()
print('200 OK', [('Content-Type', 'text/html')])
import csv
with open('hackgt 9 micro-loans data - Sheet1.csv') as file:
    csvFile = csv.DictReader(file)
    need = int(input("Approximately how much money do you need?"))
    for lines in csvFile:
        total = 0
        if need <= int(lines['Average Loan Amount']):
            total +=1
            print("You have been matched with " + lines["Organization Name"])
            total +=1
        else:
            continue
    print("You have {} nonprofit matches! Look for more information on their websites.".format(total))




