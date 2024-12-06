const Footer = () => {
  return (
    <div className="bg-[url('/images/portbg5.jpg')] bg-cover bg-center" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 pt-8 pb-24">
          <div className="flex flex-col gap-4">
            <Social image="/images/ig.png" title="@icon.pyr"/>
            <Social image="/images/github.png" title="github.com/iconpyr"/>
            <Social image="/images/mail.png" title="iconpiyorod@gmail.com"/>
          </div>

          <p className="text-black text-right">Copyright© 2024, Piyorod</p>
        </div>

      </div>
    </div>
  );
};

const Social = (props) => {
  return (
    <div className="flex items-center gap-4 text-black">
      <img src={props.image} alt="" width={60} />
      <p className="text-xl">{props.title}</p>
    </div>
  );
};
export default Footer;
