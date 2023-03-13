
const Contact = () => {
  return (

    <div className="container">
      //  Hiring Page title
      <div class="container-fluid  py-5 mb-5">
          <div class="container" data-aos="zoom-in"  data-aos-duration="1500">
      
              <h1 class="text-center contact-tag pt-5 pb-5"   >Contact Us</h1>
      
              <h2 class="text-center hiring"  >We are currently booking new projects for August 2022 and beyond!</h2>
      
          </div>
      </div>
      
         {/* contact form */}
      <div class="container-fluid ">
          <div class="contact-box mx-3 py-5 ">
              <div class="container px-5 py-5" data-aos="fade-up"  data-aos-duration="1500">
                  <div class="px-md-5 py-5 ">
                      <div class="grid-cols-1 md:grid-cols-2 my-3">
                          <label for="formGroupExampleInput" class="form-label">First name </label>
                          <input type="text" class="form-control py-3" placeholder="First name" aria-label="First name"/>
                      </div>
                      <div class="grid-cols-1 md:grid-cols-2 my-3">
                          <label for="formGroupExampleInput" class="form-label">Last name  </label>
                          <input type="text" class="form-control py-3" placeholder="Last name" aria-label="Last name"/>
                      </div>
                      <div class="grid-cols-1 md:grid-cols-2 my-3">
                          <label for="formGroupExampleInput" class="form-label">Email Address </label>
                          <input type="text" class="form-control py-3" placeholder="Email Address" aria-label="Email"/>
                      </div>
                      <div class="grid-cols-1 md:grid-cols-2 my-3">
                          <label for="formGroupExampleInput" class="form-label">Country    </label>
                          <input type="text" class="form-control py-3" placeholder="Country" aria-label="Country"/>
                      </div>
                      <div class="mb-3 my-3">
                          <label for="formGroupExampleInput" class="form-label">How did you find out about Drunken Wizards?</label>
                          <input type="text" class="form-control py-3" id="formGroupExampleInput" placeholder="Just say someting :)"/>
                      </div>
                      <div class="mb-3 my-3">
                          <label for="exampleFormControlTextarea1" class="form-label">What do we need to do for you?</label>
                          <textarea class="form-control py-3" id="exampleFormControlTextarea1" placeholder="Type your need" rows="3"></textarea>
                      </div>
                      <div class="row g-3 py-2 justify-content-center">
                          <button type="button" class="my-button">SEND</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Contact