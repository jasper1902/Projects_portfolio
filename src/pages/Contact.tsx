import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
const Contact = () => {
    return (
        <>
            <div id='contact' className="max-w-[1240px] mx-auto p-8 lg:grid lg:grid-cols-2 flex flex-col items-center justify-center gap-8">
                <div className="card w-96 bg-base-100 shadow-xl lg:max-w-[384px] max-w-[350px]">
                    <div className="card-body">
                        <h2 className="card-title lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">Contact Form</h2>

                        <form>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>

                            </div>
                        </form>

                        <div className="card-actions justify-end">
                            <button className="btn btn-success" disabled>send</button>
                        </div>
                    </div>
                </div>

                <div className="lg:text-2xl md:text-xl  text-base font-bold flex flex-col gap-8">
                    <h2>Contact details</h2>
                    <p className='flex items-center gap-4'><MdEmail />jasper.1199a@gmail.com</p>
                    <p className='flex items-center gap-4'><BsFillTelephoneFill />+6664 479 5844</p>
                </div>
            </div>
        </>
    )
}

export default Contact