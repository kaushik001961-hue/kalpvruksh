import Image from "next/image";
import CopyUpiButton from "@/components/ui/CopyUpiButton";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#f7faf8]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Support Our Mission
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Your contribution helps Kalpvruksh Charitable Trust create
            meaningful change in communities, protect nature, and build a
            better and more sustainable tomorrow.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-800">
              Make a Difference
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Every contribution, big or small, helps us continue our work
              towards environmental protection, community development,
              education, healthcare, and social welfare.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-green-50 p-5">
                <h3 className="font-semibold text-green-800">
                  Environmental Protection
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Support tree plantation and environmental conservation
                  initiatives.
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                <h3 className="font-semibold text-green-800">
                  Community Welfare
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Help communities access essential support and resources.
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                <h3 className="font-semibold text-green-800">
                  Education & Healthcare
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Support education, healthcare camps, and other social
                  initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-800">
              Donate Now
            </h2>

            <p className="mt-3 text-slate-600">
              Choose your preferred way to support Kalpvruksh Charitable Trust.
            </p>

            {/* Bank Transfer */}
            <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-6">
              <h3 className="text-xl font-semibold text-green-800">
                Bank Transfer
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Account Name:</span>{" "}
                  Kalpvruksh Charitable Trust
                </p>

                <p>
                  <span className="font-semibold">Bank Name:</span>{" "}
                  SBI
                </p>

                <p>
                  <span className="font-semibold">Account Number:</span>{" "}
                  56009091110
                </p>

                <p>
                  <span className="font-semibold">IFSC:</span>{" "}
                  SBIN0060009
                </p>
              </div>
            </div>

            {/* UPI Donation */}
            <div className="mt-6 rounded-2xl border border-green-100 p-6 text-center">
              <h3 className="text-xl font-semibold text-green-800">
                UPI Donation
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Scan the QR code or use the UPI ID below to make your donation.
              </p>

              {/* QR Code */}
              <div className="mx-auto mt-5 flex h-48 w-48 items-center justify-center rounded-2xl border border-green-100 bg-white p-3 shadow-sm">
                <Image
                  src="/images/donation-qr.png"
                  alt="Kalpvruksh Charitable Trust Donation QR Code"
                  width={220}
                  height={220}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Scan & Donate
              </p>

              {/* UPI ID */}
              <div className="mx-auto mt-5 max-w-md rounded-xl bg-green-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  UPI ID
                </p>

                <p className="mt-2 break-all text-base font-semibold text-green-800">
                  kaushik001961@oksbi
                </p>

                <div className="mt-4">
                  <CopyUpiButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Together We Can Make a Difference
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-green-50">
          Your support helps us continue our mission and reach more people
          through meaningful social and environmental initiatives.
        </p>
      </section>
    </main>
  );
}