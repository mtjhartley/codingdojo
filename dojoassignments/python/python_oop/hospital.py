import random
import itertools
id = 0


class Patient(object):
    id_generator = itertools.count(1)
    def __init__(self, name, allergies, bedNum=None):
        self.id = next(self.id_generator)
        self.name = name
        self.allergies = allergies
        self.bedNum = bedNum

class Hospital(object):
    bed_num_generator = itertools.count(1)
    def __init__(self, name, capacity=5):
        self.patients = []
        self.name = name
        self.capacity = capacity
    def info(self):
        print "Num of patients:", len(self.patients)
        print "Hospital name:", self.name
        for patient in self.patients:
            print "Patient information"
            print "Id:", patient.id
            print "Name:",patient.name
            print "BedNumber:",patient.bedNum
            print "_____________"
    def admit(self, patient):
        if len(self.patients) < self.capacity:
            print "Adding the patient to the hospital"
            patient.bedNum = next(self.bed_num_generator)
            if patient.bedNum >= 10:
                self.bed_num_generator = itertools.count(1)
            self.patients.append(patient)
        else:
            print "Capacity max!"

        return self
    def discharge(self, name):
        for patient in self.patients:
            if patient.name == name:
                patient.bedNum = None
                self.patients.remove(patient)
        return self



patient1 = Patient("Michael", "Cefloflexin")
patient2 = Patient("Gary", "Anime")
patient3 = Patient("David", "Sports")
patient4 = Patient("Alex", "Freckles")

sacred_heart = Hospital("Sacred Heart", 3)

sacred_heart.admit(patient1)
sacred_heart.admit(patient2)
sacred_heart.admit(patient3)
sacred_heart.admit(patient4)

sacred_heart.info()

sacred_heart.discharge("Michael")
print
print "After discharging..."
print
sacred_heart.info()


                

