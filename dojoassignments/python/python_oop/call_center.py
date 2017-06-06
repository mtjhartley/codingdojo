import datetime

class Call(object):
    def __init__(self, Id, name, number, reason):
        self.id = Id
        self.name = name
        self.number = number
        self.time = datetime.datetime.now()
        self.reason = reason
    def display(self):
        print "Id: ", self.id
        print "Name: ", self.name
        print "Number: ", self.number
        print "Time: ", self.time
        print "Reason: ", self.reason

    
class CallCenter(object):
    def __init__(self):
        self.callQueue = []
        self.queueSize = 0
    def addCall(self, call):
        print "Adding this call to the queue."
        self.callQueue.append(call)
        self.queueSize = len(self.callQueue)
        return self
    def removeCall(self):
        self.callQueue.pop(0)
        self.queueSize = len(self.callQueue)
        return self
    def info(self):
        print "The queue has this many calls: " + str(self.queueSize)
        for call in self.callQueue:
            print call.name
            print call.number
            print call.time
        return self

    def removeByNumber(self, number):
        for index in range(len(self.callQueue)):
            if self.callQueue[index].number == number:
                self.callQueue.pop(index)
                self.queueSize = len(self.callQueue)
        return self
    def sortQueueByTime(self):
        self.callQueue = sorted(self.callQueue, key = lambda x: x.time)
        return self


call1 = Call(1, "Michael", "425-293-3057","Tryna swag out.")
call2 = Call(2, "Dempsey", "425-337-3170", "Swag me out.")
call3 = Call(3, "Hartley", "425-870-3170", "Try that again!.")


call1.display()

call_center = CallCenter()

call_center.addCall(call1).info().addCall(call2).addCall(call3).info().removeCall().info().removeByNumber("425-870-3170").info()

call_center.addCall(call3).addCall(call1)
print "Try this on for size!"
call_center.info()
print "Now sort me!"

call_center.sortQueueByTime().info()


        
    

