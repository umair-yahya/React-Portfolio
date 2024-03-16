import React from "react";
import heroImg from "../../assets/images/pic1.png";
import CountUp from "react-countup";
import infoData from "../../assets/data/infoData";
import resume from "../../assets/Umair-resume.pdf";

const Hero = () => {
	return (
		<section className="pt-0" id="about">
			<div className="container pt-14">
				<div className="md:flex items-center justify-between sm:flex-col md:flex-row">
					{infoData.map((val, i) => {
						return (
							<div className="w-full md:basis-1/2" key={i}>
								<h5
									data-aos="fade-right"
									data-aos-duration="1500"
									className="text-headingColor font-[600] text-[16px]"
								>
									{val.title}
								</h5>
								<h1
									data-aos="fade-up"
									data-aos-duration="1500"
									className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
								>
									{val.fullName} <br />
									{val.techStack}
								</h1>

								<div
									data-aos="fade-up"
									data-aos-duration="1800"
									data-aos-delay="200"
									className="flex items-center gap-6 mt-7"
								>
									<a href={resume} download>
										<button
											className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]
                        "
										>
											<i class="ri-file-download-line"></i>Download Resume
										</button>
									</a>

									<a
										href="#portfolio"
										className="text-primaryColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
									>
										See portfolio
									</a>
								</div>

								<p
									data-aos="fade-up"
									data-aos-duration="1500"
									className="flex mt-10 gap-2 text-headingColor-font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
								>
									<span class="ri-apps-2-line"></span>
									{val.description}
								</p>
								<div className="flex items-center gap-9 mt-14">
									<span className="text-smallTextColor text-[15px] font-[600]">
										Follow me:
									</span>
									<span>
										<a
											href={val.LinkdIn}
											target="_blank"
											className="text-smallTextColor text-[18px] font-[600]"
										>
											<i class="ri-linkedin-line"></i>
										</a>
									</span>
									<span>
										<a
											href={val.github}
											target="_blank"
											className="text-smallTextColor text-[18px] font-[600]"
										>
											<i class="ri-github-fill"></i>
										</a>
									</span>
									<span>
										<a
											href={val.facebook}
											target="_blank"
											className="text-smallTextColor text-[18px] font-[600]"
										>
											<i class="ri-facebook-line"></i>
										</a>
									</span>
									<span>
										<a
											href={val.instagram}
											target="_blank"
											className="text-smallTextColor text-[18px] font-[600]"
										>
											<i class="ri-instagram-line"></i>
										</a>
									</span>
								</div>
							</div>
						);
					})}

					<div className="basis-1/3 mt-10 sm:mt-0">
						<div className="bg-primaryColor border rounded-full">
							<figure className="flex items-center justify-center">
								<img src={heroImg} alt="" />
							</figure>
						</div>
					</div>

					{/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={1} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Years Of Experience</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={1} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Years Of Experience</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={1} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Years Of Experience</h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={1} duration={2} suffix='+'/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>Years Of Experience</h4>
                    </div>
                </div> */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
