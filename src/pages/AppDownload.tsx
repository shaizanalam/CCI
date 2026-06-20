import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const AppDownload = () => {
  useEffect(() => {
    document.getElementById('year')!.textContent = new Date().getFullYear();
    document.getElementById('last-updated-date')!.textContent = new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#f8f6f1', color: '#1b2430', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Header />

      {/* Hero */}
      <header style={{
        background: 'radial-gradient(ellipse 900px 480px at 18% -10%, rgba(212,151,44,0.18), transparent 60%), linear-gradient(180deg, #142a4a, #1a365d 70%, #234876)',
        color: '#fff',
        padding: '64px 0 88px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="max-w-[1040px] mx-auto px-6 relative grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.08em] uppercase text-[#d4972c] bg-[rgba(212,151,44,0.12)] border border-[rgba(212,151,44,0.35)] px-3 py-1.5 rounded-full mb-5.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4972c]"></span>
              Official Android App
            </span>
            <h1 className="font-serif text-[clamp(34px,4.4vw,52px)] font-semibold leading-[1.06] mb-4.5 text-white">
              Your classes, tests & results — <em className="font-serif font-normal text-[#d4972c]">now in your pocket.</em>
            </h1>
            <p className="text-[17px] text-white/78 max-w-[480px] mb-7">
              CCI LearnHub gives NEET, JEE and Board students direct access to live classes, study material and test results. Install it straight from this page — no Play Store needed.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="flex items-center gap-1.5 bg-white/7 border border-white/14 px-3 py-1.5 rounded-full text-[13px] text-white/90">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                v1.0
              </span>
              <span className="flex items-center gap-1.5 bg-white/7 border border-white/14 px-3 py-1.5 rounded-full text-[13px] text-white/90">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M12 3v12m0 0l-4-4m4 4l4-4M3 21h18"/></svg>
                4.6 MB
              </span>
              <span className="flex items-center gap-1.5 bg-white/7 border border-white/14 px-3 py-1.5 rounded-full text-[13px] text-white/90">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                Android 7.0+
              </span>
            </div>

            <div className="flex flex-wrap gap-3.5 items-center">
              <a href="/CCI-LearnHub.apk" download className="inline-flex items-center gap-2.5 bg-[#d4972c] text-[#0e1d33] font-bold text-[16px] px-7 py-4 rounded-xl no-underline shadow-[0_12px_28px_-8px_rgba(212,151,44,0.55)] hover:translate-y-[-2px] hover:shadow-[0_16px_34px_-8px_rgba(212,151,44,0.65)] hover:bg-[#e2a534] transition-all border-none cursor-pointer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-5 h-5"><path d="M12 3v13m0 0l-4.5-4.5M12 16l4.5-4.5"/><path d="M4 19h16" strokeLinecap="round"/></svg>
                <span>
                  Download APK
                  <span className="block text-[11px] font-medium opacity-70 mt-0.5">CCI-LearnHub-v1.0.apk · 4.6 MB</span>
                </span>
              </a>
              <a href="#steps" className="inline-flex items-center gap-2 text-white/85 text-[14px] font-semibold no-underline border-b border-white/30 pb-0.5 hover:text-white hover:border-white">
                See install steps ↓
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[230px] rounded-[34px] bg-gradient-to-br from-[#22344f] to-[#0e1d33] border border-white/12 shadow-[0_2px_4px_rgba(20,32,58,0.08),0_24px_48px_-16px_rgba(20,32,58,0.28)] p-2.5 relative">
              <div className="bg-[#f8f6f1] rounded-[24px] overflow-hidden aspect-[9/19] flex flex-col">
                <div className="h-[22px] flex items-center justify-center bg-[#f8f6f1]">
                  <div className="w-12 h-1.5 rounded-[3px] bg-[#d8d3c5]"></div>
                </div>
                <div className="m-3.5 bg-white rounded-[14px] p-4 shadow-[0_8px_20px_-8px_rgba(20,32,58,0.25)] text-[9.5px]">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-[#d4972c] to-[#1a365d] flex-shrink-0"></div>
                    <div>
                      <div className="font-bold text-[11px] text-[#142a4a]">CCI LearnHub</div>
                      <div className="text-[8px] text-[#5a6472]">Do you want to install this app?</div>
                    </div>
                  </div>
                  <p className="m-0 mb-2.5 text-[8.5px] leading-[1.5] text-[#5a6472]">
                    This app does not have access to anything sensitive. It can only access the internet.
                  </p>
                  <div className="flex gap-1.5">
                    <span className="flex-1 text-center py-1.5 rounded-[7px] font-bold text-[8.5px] bg-[#eee] text-[#888]">Cancel</span>
                    <span className="flex-1 text-center py-1.5 rounded-[7px] font-bold text-[8.5px] bg-[#d4972c] text-[#0e1d33]">Install</span>
                  </div>
                </div>
                <div className="mt-auto flex justify-center py-2.5 pb-1.5">
                  <div className="w-[90px] h-1 rounded-[3px] bg-[#cfc9b8]"></div>
                </div>
              </div>
              <span className="absolute -top-2 -right-1 bg-[#2f7a4f] text-white text-[11.5px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_8px_18px_-6px_rgba(47,122,79,0.5)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><path d="M20 6L9 17l-5-5"/></svg>
                Verified build
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Why APK section */}
        <section className="py-[72px]">
          <div className="max-w-[1040px] mx-auto px-6">
            <div className="max-w-[640px] mb-10">
              <span className="block text-[12.5px] font-bold tracking-[0.08em] uppercase text-[#b8842c] mb-2.5">Why a direct download</span>
              <h2 className="font-serif text-[clamp(26px,3vw,34px)] font-semibold mb-3 text-[#142a4a]">Not on the Play Store — and that's on purpose</h2>
              <p className="text-[15.5px] text-[#5a6472] max-w-[560px]">We distribute CCI LearnHub directly so updates reach you the moment they're ready, with no review queue in between.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-white border border-[#e3e0d6] rounded-[14px] p-6">
                <div className="w-9.5 h-9.5 rounded-lg bg-[#e8edf5] text-[#1a365d] flex items-center justify-center mb-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[19px] h-[19px]"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
                </div>
                <h3 className="text-[16px] font-semibold mb-2 text-[#142a4a]">Faster updates</h3>
                <p className="text-[14px] text-[#5a6472] m-0">New test results and study material go live as soon as we publish — not after a multi-day store review.</p>
              </div>
              <div className="bg-white border border-[#e3e0d6] rounded-[14px] p-6">
                <div className="w-9.5 h-9.5 rounded-lg bg-[#e8edf5] text-[#1a365d] flex items-center justify-center mb-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[19px] h-[19px]"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </div>
                <h3 className="text-[16px] font-semibold mb-2 text-[#142a4a]">Built only for our students</h3>
                <p className="text-[14px] text-[#5a6472] m-0">This app is made specifically for CCI enrolled students — it isn't designed for a general public listing.</p>
              </div>
              <div className="bg-white border border-[#e3e0d6] rounded-[14px] p-6">
                <div className="w-9.5 h-9.5 rounded-lg bg-[#e8edf5] text-[#1a365d] flex items-center justify-center mb-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[19px] h-[19px]"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/></svg>
                </div>
                <h3 className="text-[16px] font-semibold mb-2 text-[#142a4a]">Same app, full control</h3>
                <p className="text-[14px] text-[#5a6472] m-0">You're downloading the exact APK we build and test in-house — nothing repackaged or re-signed by a third party.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps section */}
        <section id="steps" className="py-[72px]" style={{ background: '#0e1d33', color: '#fff' }}>
          <div className="max-w-[1040px] mx-auto px-6">
            <div className="max-w-[640px] mb-10">
              <span className="block text-[12.5px] font-bold tracking-[0.08em] uppercase text-[#d4972c] mb-2.5">Installation guide</span>
              <h2 className="font-serif text-[clamp(26px,3vw,34px)] font-semibold mb-3 text-white">Four steps, about two minutes</h2>
              <p className="text-[15.5px] text-white/60 max-w-[560px]">Android will show a few security prompts since this isn't from the Play Store. That's expected — here's exactly what to tap.</p>
            </div>

            <div className="border border-white/10 rounded-[18px] overflow-hidden bg-white/2.5">
              <div className="grid grid-cols-[64px_1fr] gap-5 p-6 border-b border-white/8">
                <div className="font-serif text-[30px] font-semibold text-[#d4972c] leading-none opacity-90">01</div>
                <div>
                  <h3 className="text-white text-[17px] font-semibold mb-1.5 font-sans">Tap "Download APK" above</h3>
                  <p className="text-white/65 text-[14.5px] m-0 mb-2.5 max-w-[560px]">
                    The file <span className="inline-flex items-center gap-1.5 font-mono text-[12px] bg-white/8 border border-white/14 text-[#dde4ee] px-2.5 py-1 rounded-lg mx-0.5 my-0.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-[#d4972c]"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>CCI-LearnHub-v1.0.apk</span> will download through Chrome and appear in your notification bar once it's done.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[64px_1fr] gap-5 p-6 border-b border-white/8">
                <div className="font-serif text-[30px] font-semibold text-[#d4972c] leading-none opacity-90">02</div>
                <div>
                  <h3 className="text-white text-[17px] font-semibold mb-1.5 font-sans">Allow installs from Chrome</h3>
                  <p className="text-white/65 text-[14.5px] m-0 mb-2.5 max-w-[560px]">
                    Tap the downloaded file. Android will ask for permission to install unknown apps from Chrome — tap <strong>Settings</strong>, then turn on <strong>Allow from this source</strong>, and go back.
                  </p>
                  <div className="inline-flex items-start gap-2 bg-[rgba(212,151,44,0.1)] border border-[rgba(212,151,44,0.25)] rounded-lg px-3 py-2 text-[12.5px] text-[#d4972c] mt-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>
                    <span>This is a one-time setting for Chrome, not a permanent device change. You're approving the source (Chrome), not any specific app.</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[64px_1fr] gap-5 p-6 border-b border-white/8">
                <div className="font-serif text-[30px] font-semibold text-[#d4972c] leading-none opacity-90">03</div>
                <div>
                  <h3 className="text-white text-[17px] font-semibold mb-1.5 font-sans">Tap "Install"</h3>
                  <p className="text-white/65 text-[14.5px] m-0 mb-2.5 max-w-[560px]">
                    You'll see a final confirmation showing this app only requests internet access. Tap <strong>Install</strong> and wait a few seconds.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[64px_1fr] gap-5 p-6">
                <div className="font-serif text-[30px] font-semibold text-[#d4972c] leading-none opacity-90">04</div>
                <div>
                  <h3 className="text-white text-[17px] font-semibold mb-1.5 font-sans">Open CCI LearnHub and log in</h3>
                  <p className="text-white/65 text-[14.5px] m-0 mb-2.5 max-w-[560px]">
                    Use the same mobile number or ID registered with the institute. If you're not sure what that is, ask at the front desk or your batch coordinator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="py-[72px]">
          <div className="max-w-[1040px] mx-auto px-6">
            <div className="max-w-[640px] mb-10">
              <span className="block text-[12.5px] font-bold tracking-[0.08em] uppercase text-[#b8842c] mb-2.5">Before you install</span>
              <h2 className="font-serif text-[clamp(26px,3vw,34px)] font-semibold mb-3 text-[#142a4a]">What this app can — and can't — access</h2>
              <p className="text-[15.5px] text-[#5a6472] max-w-[560px]">Full transparency on what you're installing, so the security prompts make sense rather than feel alarming.</p>
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="bg-white border border-[#e3e0d6] rounded-[14px] p-7">
                <h3 className="text-[16px] font-semibold text-[#142a4a] mb-4">Permissions this app requests</h3>
                <div className="flex items-start gap-3 py-3 border-b border-[#e3e0d6]">
                  <div className="w-7.5 h-7.5 rounded-lg bg-[#e4f3ea] text-[#2f7a4f] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.2-4-10s1.5-7.3 4-10z"/></svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#142a4a] mb-0.5">Internet access</div>
                    <div className="text-[13px] text-[#5a6472]">Required to load your classes, materials and test results. This is the only permission the app requests.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-3">
                  <div className="w-7.5 h-7.5 rounded-lg bg-[#e4f3ea] text-[#2f7a4f] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#142a4a] mb-0.5">No contacts, camera, or location</div>
                    <div className="text-[13px] text-[#5a6472]">CCI LearnHub does not ask for access to your contacts, camera, microphone, files, or location.</div>
                  </div>
                </div>
                <div className="mt-5 text-[13px] text-[#5a6472] border-l-3 border-[#d4972c] py-1 px-0 pl-3.5">
                  We chose direct distribution mainly to skip Play Store's review delays for a student-only app — not to avoid permission scrutiny. The list above is everything this build requests.
                </div>
              </div>

              <div className="bg-white border border-[#e3e0d6] rounded-[14px] p-7">
                <h3 className="text-[16px] font-semibold text-[#142a4a] mb-4">File details</h3>
                <table className="w-full border-collapse text-[13.5px]">
                  <tbody>
                    <tr className="border-b border-[#e3e0d6]">
                      <td className="py-2.5 text-[#5a6472]">File name</td>
                      <td className="py-2.5 text-right font-semibold text-[#142a4a] font-mono text-[12.5px]">CCI-LearnHub-v1.0.apk</td>
                    </tr>
                    <tr className="border-b border-[#e3e0d6]">
                      <td className="py-2.5 text-[#5a6472]">Package ID</td>
                      <td className="py-2.5 text-right font-semibold text-[#142a4a] font-mono text-[12.5px]">com.cci.learnhub</td>
                    </tr>
                    <tr className="border-b border-[#e3e0d6]">
                      <td className="py-2.5 text-[#5a6472]">Version</td>
                      <td className="py-2.5 text-right font-semibold text-[#142a4a] font-mono text-[12.5px]">1.0</td>
                    </tr>
                    <tr className="border-b border-[#e3e0d6]">
                      <td className="py-2.5 text-[#5a6472]">File size</td>
                      <td className="py-2.5 text-right font-semibold text-[#142a4a] font-mono text-[12.5px]">4.6 MB</td>
                    </tr>
                    <tr className="border-b border-[#e3e0d6]">
                      <td className="py-2.5 text-[#5a6472]">Minimum Android</td>
                      <td className="py-2.5 text-right font-semibold text-[#142a4a] font-mono text-[12.5px]">7.0 (Nougat)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-[#5a6472]">Last updated</td>
                      <td className="py-2.5 text-right font-semibold text-[#142a4a] font-mono text-[12.5px]" id="last-updated-date">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-[72px]">
          <div className="max-w-[1040px] mx-auto px-6">
            <div className="max-w-[640px] mb-10">
              <span className="block text-[12.5px] font-bold tracking-[0.08em] uppercase text-[#b8842c] mb-2.5">Common questions</span>
              <h2 className="font-serif text-[clamp(26px,3vw,34px)] font-semibold mb-3 text-[#142a4a]">Stuck on something?</h2>
            </div>

            <div className="border-t border-[#e3e0d6]">
              <details className="border-b border-[#e3e0d6] group">
                <summary className="w-full text-left bg-none border-none cursor-pointer flex items-center justify-between gap-4 py-5 font-sans text-[15.5px] font-semibold text-[#142a4a] list-none">
                  Chrome says "this file can be harmful." Is it safe?
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px] flex-shrink-0 text-[#b8842c] transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                </summary>
                <div className="pb-5 text-[14.5px] text-[#5a6472] max-w-[680px]">Yes. Chrome shows this warning for any APK not downloaded from the Play Store, regardless of what it contains — it's not specific to this file. You can tap "Download anyway" to continue.</div>
              </details>
              <details className="border-b border-[#e3e0d6] group">
                <summary className="w-full text-left bg-none border-none cursor-pointer flex items-center justify-between gap-4 py-5 font-sans text-[15.5px] font-semibold text-[#142a4a] list-none">
                  The install button is greyed out or nothing happens.
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px] flex-shrink-0 text-[#b8842c] transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                </summary>
                <div className="pb-5 text-[14.5px] text-[#5a6472] max-w-[680px]">This usually means "Allow from this source" wasn't turned on for Chrome. Go to your phone's Settings → Apps → Chrome → Install unknown apps, and enable it, then reopen the downloaded file.</div>
              </details>
              <details className="border-b border-[#e3e0d6] group">
                <summary className="w-full text-left bg-none border-none cursor-pointer flex items-center justify-between gap-4 py-5 font-sans text-[15.5px] font-semibold text-[#142a4a] list-none">
                  Will I get future updates automatically?
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px] flex-shrink-0 text-[#b8842c] transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                </summary>
                <div className="pb-5 text-[14.5px] text-[#5a6472] max-w-[680px]">Not automatically — since this isn't a Play Store install, the app won't auto-update. We'll announce new versions on this page and in your batch's WhatsApp group; just re-download and install over the existing app.</div>
              </details>
              <details className="border-b border-[#e3e0d6] group">
                <summary className="w-full text-left bg-none border-none cursor-pointer flex items-center justify-between gap-4 py-5 font-sans text-[15.5px] font-semibold text-[#142a4a] list-none">
                  I have an iPhone. Where's the iOS version?
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px] flex-shrink-0 text-[#b8842c] transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                </summary>
                <div className="pb-5 text-[14.5px] text-[#5a6472] max-w-[680px]">CCI LearnHub is currently Android-only. iOS support is being evaluated — check this page or ask at the front desk for updates.</div>
              </details>
              <details className="border-b border-[#e3e0d6] group">
                <summary className="w-full text-left bg-none border-none cursor-pointer flex items-center justify-between gap-4 py-5 font-sans text-[15.5px] font-semibold text-[#142a4a] list-none">
                  Still stuck?
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px] flex-shrink-0 text-[#b8842c] transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14"/></svg>
                </summary>
                <div className="pb-5 text-[14.5px] text-[#5a6472] max-w-[680px]">Reach out to us on WhatsApp or visit the front desk at the institute, and we'll help you get set up.</div>
              </details>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-[72px]">
          <div className="max-w-[1040px] mx-auto px-6">
            <div className="rounded-[22px] p-12 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(155deg, #1a365d, #0e1d33)' }}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_500px_260px_at_50%_0%,_rgba(212,151,44,0.22),_transparent_70%)]"></div>
              <h2 className="text-white text-[clamp(24px,3vw,30px)] mb-2.5 relative font-serif">Ready when you are.</h2>
              <p className="text-white/70 text-[14.5px] mb-6.5 relative">One download, four quick steps, and you're in.</p>
              <a href="/CCI-LearnHub.apk" download className="inline-flex items-center gap-2.5 bg-[#d4972c] text-[#0e1d33] font-bold text-[16px] px-7 py-4 rounded-xl no-underline shadow-[0_12px_28px_-8px_rgba(212,151,44,0.55)] hover:translate-y-[-2px] hover:shadow-[0_16px_34px_-8px_rgba(212,151,44,0.65)] hover:bg-[#e2a534] transition-all border-none cursor-pointer relative mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-5 h-5"><path d="M12 3v13m0 0l-4.5-4.5M12 16l4.5-4.5"/><path d="M4 19h16" strokeLinecap="round"/></svg>
                <span>
                  Download APK
                  <span className="block text-[11px] font-medium opacity-70 mt-0.5">CCI-LearnHub-v1.0.apk · 4.6 MB</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 pb-10 text-center text-[13px] text-[#5a6472]">
        <div className="max-w-[1040px] mx-auto px-6">
          © <span id="year"></span> Chhattisgarh Coaching Institute · <Link to="/" className="text-[#1a365d] font-semibold no-underline">chhattisgarhcoachinginstitute.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default AppDownload;
