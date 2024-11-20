const Location = () => {
  return (
    <section id="location" className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <iframe
          title="Great mongols toastmasters газрын зураг"
          className="w-full rounded-3xl object-cover"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.813004357995!2d106.92496491328914!3d47.92065557110037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923f7b74d64d%3A0x27df57368f3a1de0!2sTanan%20Center!5e0!3m2!1sen!2smn!4v1732113089295!5m2!1sen!2smn"
          height={600}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
export default Location;
