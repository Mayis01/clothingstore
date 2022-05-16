
import Button from "../../../Components/Icons/Button/Button";
import Container from "../../../Components/Layouts/Container/Container";

export default function SubscribeSection() {


  return (
    <>
      <Container>
      <section className="WrapperEmailSubscribe">
          <div>
      
            
            <div>
              <h3>Keep Updated</h3>
              <h5>
                Egestas imperdiet turpis est sed et aliquet augue dui. Erat nunc
                enim vestibulum amet duis pharetra, faucibus arcu.
              </h5>

              <form action="">
                <input type="email" placeholder="Your Email" /> <br />
                <Button text="subscribe" className="SubscribeButton"/>
              </form>
            </div>
          </div>
        </section>
        
      </Container>
    </>
  );
}
