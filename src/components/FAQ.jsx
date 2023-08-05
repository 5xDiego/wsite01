export default function FAQ() {
  return (
    <>
      <div className="hero w-4/5 h-fit flex flex-col">
        <h1 className="text-4xl text-neutral-content font-bold"> FAQ's </h1>
        <div className="collapse collapse-arrow bg-info-content mt-5">
          <input type="radio" name="my-accordion-2" defaultChecked="true" />
          <div className="collapse-title text-xl text-neutral-content font-medium">
            What does our Company offer?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content">hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-info-content mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-neutral-content">
            Why is our company the right choice?
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content">hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-info-content mt-5 mb-12">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-neutral-content">
            What's in for me? 
          </div>
          <div className="collapse-content">
            <p className="text-neutral-content">hello</p>
          </div>
        </div>
      </div>
    </>
  );
}
