


function Attributes() {
  return (
    <>
      <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Attributes
            </h1>
            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
              MY STRENGTHS
            </p>

            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <i data-feather="activity"></i>
                  </div>
                  <h4 className="font-medium text-gray-700 text-lg mb-4">
                    Communication
                  </h4>
                  <p className="font-normal text-gray-500 text-md">
                    I communicated technical information to a wide range of
                    stakeholders. I have led and coordinated teams, fostering
                    open communication channels and resolving conflicts to
                    achieve team goals.{" "}
                  </p>
                </div>
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <i data-feather="codesandbox"></i>
                  </div>
                  <h4 className="font-medium text-gray-700 text-lg mb-4">
                    Adaptability
                  </h4>
                  <p className="font-normal text-gray-500 text-md">
                    I quickly learned and adapted to new workflows and
                    information systems. As a nurse, I often wear multiple hats
                    while problem solving, and navigating complex situations
                    with accuracy and efficiency.{" "}
                  </p>
                </div>
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <i data-feather="users"></i>
                  </div>
                  <h4 className="font-medium text-gray-700 text-lg mb-4">
                    Collaboration
                  </h4>
                  <p className="font-normal text-gray-500 text-md">
                    I worked with cross-functional teams to deliver successful
                    project outcomes. I am a team player who leverages diverse
                    perspectives and skills to work collaboratively with
                    colleagues.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Attributes
