import { Zalando_Sans_Expanded } from 'next/font/google';


const titles = Zalando_Sans_Expanded({subsets:['latin']})




export default function Faq() {

    
  return (
    <main className={`w-full min-h-screen bg-neutral-950 text-neutral-100 ${titles.className} rounded-2xl`}>
      
      <section className="max-w-4xl mx-auto px-6 pb-16 pt-8 space-y-12">
        
        {/* TITLE */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-400">
            Find answers about orders, shipping, payments and returns.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-8">

          {/* ORDER */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Orders
            </h2>

            <div className="space-y-3">
              <p className="font-medium">
                How do I place an order?
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Simply select your products, choose the correct size or option,
                and add them to your cart. Once ready, proceed to checkout and
                follow the payment instructions.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-medium">
                Can I modify or cancel my order?
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Orders are processed quickly to ensure fast shipping.
                If you need to make changes, please contact our support team
                as soon as possible after placing your order.
              </p>
            </div>
          </div>

          {/* SHIPPING */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Shipping
            </h2>

            <div className="space-y-3">
              <p className="font-medium">
                Where do you ship?
              </p>
              <p className="text-neutral-400 leading-relaxed">
                We currently ship to most countries worldwide.
                Shipping availability and costs are calculated at checkout.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-medium">
                How long does shipping take?
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Orders are usually processed within 1–2 business days.
                Delivery times depend on your location and the selected
                shipping method.
              </p>
            </div>
          </div>

          {/* PAYMENTS */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Payments
            </h2>

            <div className="space-y-3">
              <p className="font-medium">
                What payment methods do you accept?
              </p>
              <p className="text-neutral-400 leading-relaxed">
                We accept major credit cards and other secure online
                payment methods displayed during checkout.
              </p>
            </div>
          </div>

          {/* RETURNS */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Returns & Exchanges
            </h2>

            <div className="space-y-3">
              <p className="font-medium">
                Can I return or exchange an item?
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Yes. Items can be returned or exchanged within 14 days
                of delivery, provided they are unused and in original
                condition.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-medium">
                How do I start a return?
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Please contact our support team with your order number
                and reason for return. We will guide you through the
                process.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
