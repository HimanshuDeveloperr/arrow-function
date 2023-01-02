class student {





  constructor(name, age, boardmarks) {

    this.name = name

    this.age = age


    this.boardmarks = boardmarks





  }



  eligibilityPLacements(miniage) {
    return (minmarks) => {
      if (this.boardmarks > minmarks && this.age > miniage) {
        console.log(this.name + " " + "is ready for placements")
      }
      else {
        console.log(this.name + " " + "not ready for placements")
      }
    }
  }

}


//  eligibilityPLacements(18)


var s1 = new student("suman", 20, 80)
s1.eligibilityPLacements(18)(40)



var s2 = new student("nandani", 19, 90)
s2.eligibilityPLacements(18)(40)






var s3 = new student("gautami", 18, 65)
s3.eligibilityPLacements(18)(40)






var s4 = new student("jai", 20, 39)
s4.eligibilityPLacements(18)(40)






var s5 = new student("balu", 20, 33)
s5.eligibilityPLacements(18)(40)





