import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
	// const { register, handleSubmit } = useForm();
	const form = useRef();

	// const onSubmit = async (data) => {
	// 	if (validateForm(data)) {
	// 		console.log(data);

	// 		toast.success("Post Successfully", {
	// 			position: "top-right",
	// 			autoClose: 5000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			theme: "dark",
	// 			transition: Bounce,
	// 		});
	// 	} else {
	// 		toast.error("Please Fill All The Fields", {
	// 			position: "top-right",
	// 			autoClose: 5000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			theme: "dark",
	// 			transition: Bounce,
	// 		});
	// 	}
	// };
	// const validateForm = (data) => {
	// 	for (const value of Object.values(data)) {
	// 		if (value === undefined || value === null || value === "") {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// };

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_ypsf6zw", "template_qs7lemo", form.current, {
				publicKey: "nvnngHziWR3JCbiEL",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					toast.success("Message Sent", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
					});
				},
				(error) => {
					console.log("FAILED...", error.text);
					toast.error("FAILED...", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
					});
				},
			);
		form.current.reset();
	};

	return (
		<section id="contact" className="pb-16">
			<div className="container">
				<h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
					Get In Touch
				</h2>
				<div className="md:flex justify-between items-center">
					<div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
						<iframe
							title="google-maps"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7097540089!2d66.4959539227841!3d25.192983650620572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709578533904!5m2!1sen!2s"
							className="border-0 w-full h-full"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>

					<div
						className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center
                bg-indigo-100 px-4 lg:px-8 py-8"
					>
						<form className="w-full" onSubmit={sendEmail} ref={form}>
							<div className="mb-5">
								<input
									required
									name="user_name"
									type="text"
									placeholder="Enter your name"
									className="w-full p-3 focus:outline-none
                      rounded-[5px]"
								/>
							</div>
							<div className="mb-5">
								<input
									required
									name="user_email"
									type="email"
									placeholder="Enter your email"
									className="w-full p-3 focus:outline-none
                      rounded-[5px]"
								/>
							</div>
							<div className="mb-5">
								<input
									required
									name="user_subject"
									type="text"
									placeholder="Subject"
									className="w-full p-3 focus:outline-none
                      rounded-[5px]"
								/>
							</div>
							<div className="mb-5">
								<textarea
									required
									name="message"
									type="text"
									rows={3}
									placeholder="Write your message"
									className="w-full p-3 focus:outline-none
                      rounded-[5px]"
								/>
							</div>
							<button
								type="submit"
								className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
                    hover:bg-headingColor text-center ease-linear duration-150"
							>
								Send Message
							</button>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="dark"
								transition={Bounce}
							/>
							<h2>Powered By EmailJs</h2>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
