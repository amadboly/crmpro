from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields.related import OneToOneField
from datetime import *
from django.utils import *

# Create your models here.

class customer(models.Model):
    company = models.CharField("Company Name",max_length=15)
    compwebadd = models.URLField("Company Web Address",max_length=30)
    annualrev = models.CharField("Annual Revenue",max_length=15,blank=True,
                null=True)
    noemployee = models.CharField("Number of Employees",max_length=15,
                blank=True,null=True)
    title = models.CharField("Title",choices=[('Mr','Mr'),
                            ('Mrs','Mrs')],max_length=10,
                            default='Mr',null=True,blank=True)
    fname =models.CharField("First Name",max_length=10,null=True,blank=True)
    email = models.EmailField("E-mail",max_length=30)
    phone = models.CharField("Phone Number",max_length=15)
    faxno = models.CharField("Fax Number",max_length=15,blank=True,null=True)
    mobileno = models.CharField("Cell Phone Number",max_length=15,blank=True,
                null=True)
    jobtitle = models.CharField("Job Title",max_length=10,null=True,blank=True)
    industry = models.CharField("Industry Sector",max_length=15,null=True,
                blank=True)
    address = models.CharField("Street Address",max_length=30)
    city = models.CharField("City",max_length=15)
    state = models.CharField("State/Proviance",max_length=15)
    country = models.CharField("Country",max_length=15)
    postcode = models.CharField("Post Code",max_length=10)


    def __str__(self):
        return self.company


class lead (models.Model):
    leadowner = models.CharField("Lead Owner",max_length=20)
    customerid = models.ForeignKey(customer,on_delete=models.CASCADE)
    title = models.CharField("Lead Title",max_length=100)
    source= models.CharField("Lead Source",choices =[('Web','Web'),
    ('marketing','Marketing Campain'),
    ('customer request','Customer Request')],max_length=100,default='Web')
    status =models.CharField("Status",choices =[
        ('Open','Open')
        ,('Contacted','Contacted')
        ,('Dropped','Dropped')
        ,('Qutation submitted','Qutation submitted')
        ,('Pending','Pending')
        ,('Win','Win')
        ,('Lost','Lost')],max_length=100,default='Open')
    rating = models.CharField("Rating",choices=[
    ('Cold','Cold'),
    ('Warm','Warm'),
    ('Hot','Hot')
    ],max_length=20,default='Cold')
    value = models.CharField("Value $",max_length=15,default='0')
    createdby = models.CharField("Created By", max_length=25,
                default='Marketing')
    remarks = models.TextField(max_length=100,blank=True)
    salesdesc = models.CharField("Sales Opinion",choices=[
        ('Qualified','Qualified'),
        ('Drop','Drop')
    ],max_length=15,default='Qualified')
    modby = models.CharField("Modified By",max_length=15,default='Sales')

    def __str__(self):
        return self.title


class contacts(models.Model):

    jobtitle = models.CharField("Job Title",max_length=10)
    title = models.CharField("Title",choices=[('Mr','Mr'),
                            ('Mrs','Mrs')],max_length=10,
                            default='Mr')
    fname =models.CharField("First Name",max_length=10)
    lname = models.CharField("Last Name",max_length=10)
    email = models.EmailField("E-mail",max_length=30)
    phone = models.CharField("Phone Number",max_length=15,blank=True,null=True)
    faxno = models.CharField("Fax Number",max_length=15,blank=True,null=True)
    mobileno = models.CharField("Cell Phone Number",max_length=15,blank=True,
                null=True)
    customerid = models.ForeignKey(customer,on_delete=models.CASCADE)


    def __str__(self):
        return self.fname

class marketing(models.Model):
    campainname = models.CharField("Campain Name",max_length=30)
    budget = models.CharField("Budget ($)",max_length=15)
    about = models.CharField("Campain About",choices=[('Product','Product'),
                            ('Service','Service')],default='Product',
                            max_length=30)
    createdby = models.CharField("Created By" , max_length=15)
    assignto = models.CharField("Assign To",max_length=30)
    createddate = models.DateField("Date Created",default=date.today)
    tools = models.CharField("Campain Tool",
                            choices=[
                            ('Social Media','Social Media'),
                            ('Email','Email'),
                            ('Webinar','Webinar'),
                            ('Exhabition','Exhabition'),
                            ('Online ads','Online ads'),
                            ('Media Ads','Media Ads'),
                            ('Flyers','Flyers'),
                            ('Printed clothes','Printed clothes'),
                            ('Printed DeskTools','Printed DeskTools'),
                            ],
                            default='Social Media' ,max_length=100)
    targetaudiance = models.CharField("Target Audiance",
                                        choices=[('Indviduals','Indviduals'),
                                        ('Companies','Companies')],
                                        default ='Indviduals',max_length=30)
    country = models.CharField("Target Audiance Country",max_length=30,
                                null=True,blank=True)
    industry = models.CharField("Target Audiance Industry",max_length=30,
                                null=True,blank=True)
    age = models.CharField("Target Audiance Age",max_length=30,
                                null=True,blank=True)
    gender = models.CharField("Target Audiance Gender",max_length=30,
                                null=True,blank=True ,
                                choices=[('Male','Male'),('Female','Female')],
                                default='Male')
    annualrev = models.CharField("Target Audiance Annual Rev.",max_length=30,
                                null=True,blank=True)
    noemployee = models.CharField("Target Audiance No. of Employees",
                                max_length=30,
                                null=True,blank=True)
    volume = models.CharField("Audiance Volume",max_length=30,
                                null=True,blank=True)
    duration = models.CharField("Duration In Days",max_length=30,
                                null=True,blank=True)
    startdate = models.DateField("Start Date",max_length=30,
                                null=True,blank=True)
    enddate = models.DateField("End Date",max_length=30,null=True,blank=True)
    leadsvolume = models.CharField("Expected Leads Volume",max_length=30,
                                null=True,blank=True)
    status = models.CharField("Campain Status",max_length=30,
                                choices=[('Pending','Pending'),
                                        ('Running','Running'),
                                        ('Cancelled','Cancelled'),
                                        ('Finished','Finished'),
                                        ],
                                default='Pending' )

    expenses = models.CharField("Current Expenses",max_length=30,
                                null=True,blank=True)
    cleadsvolume = models.CharField("Current Leads Volume",max_length=30,
                                null=True,blank=True)
    remarks = models.TextField("Remarks",max_length=100,
                                null=True,blank=True)
    moddate = models.DateTimeField("Modified Date",auto_now=True)

    def __str__(self):
        return self.campainname
