import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const YouthPage = () => {
  return (
    <>
      <Helmet>
        <title>Youth Programs | Jamatia Islamic Centre</title>
        <meta name="description" content="Join our youth programs and activities at Jamatia Islamic Centre. Engage with the community through educational, spiritual, and recreational programs designed for young Muslims." />
        <script type="text/javascript" src="https://form.jotform.com/jsform/260881828700360" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 md:py-32"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
              >
                Youth Programs
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Empowering our youth through faith-based programs, educational activities, and community engagement. Join us in building a stronger, more connected Muslim youth community.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Form Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="py-12 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-card-foreground">
                    Itikaaf Registration
                  </h2>
                  <p className="text-muted-foreground">
                    Register for our youth Itikaaf program by completing the form below. Please fill in all required information accurately.
                  </p>
                </div>
                
                {/* JotForm Embed */}
                <div className="w-full overflow-hidden rounded-md">
                  <iframe
                    id="JotFormIFrame-260881828700360"
                    title="Itikaaf boys only (registration form)"
                    allow="geolocation; microphone; camera; fullscreen"
                    src="https://form.jotform.com/260881828700360"
                    frameBorder="0"
                    style={{
                      minWidth: '100%',
                      maxWidth: '100%',
                      height: '539px',
                      border: 'none'
                    }}
                    scrolling="no"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-muted-foreground">
                  For questions or assistance with registration, please contact us at{' '}
                  <a href="/contact" className="text-primary hover:underline font-medium">
                    our contact page
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* JotForm Embed Handler Script */}
      <script type="text/javascript">
        {`
          var ifr = document.getElementById("JotFormIFrame-260881828700360");
          if (ifr) {
            var src = ifr.src;
            var iframeParams = [];
            if (window.location.href && window.location.href.indexOf("?") > -1) {
              iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
            }
            if (src && src.indexOf("?") > -1) {
              iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
              src = src.substr(0, src.indexOf("?"))
            }
            iframeParams.push("isIframeEmbed=1");
            ifr.src = src + "?" + iframeParams.join('&');
          }
          window.handleIFrameMessage = function(e) {
            if (typeof e.data === 'object') { return; }
            var args = e.data.split(":");
            if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
            if (!iframe) { return; }
            switch (args[0]) {
              case "scrollIntoView":
                iframe.scrollIntoView();
                break;
              case "setHeight":
                iframe.style.height = args[1] + "px";
                if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
                  iframe.style.minHeight = args[1] + "px";
                }
                break;
              case "collapseErrorPage":
                if (iframe.clientHeight > window.innerHeight) {
                  iframe.style.height = window.innerHeight + "px";
                }
                break;
              case "reloadPage":
                window.location.reload();
                break;
              case "loadScript":
                if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
                var src = args[1];
                if (args.length > 3) {
                    src = args[1] + ':' + args[2];
                }
                var script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript';
                document.body.appendChild(script);
                break;
              case "exitFullscreen":
                if      (window.document.exitFullscreen)        window.document.exitFullscreen();
                else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
                else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
                else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
                else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
                break;
            }
            var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
            if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
              var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
              iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
            }
          };
          window.isPermitted = function(originUrl, whitelisted_domains) {
            var url = document.createElement('a');
            url.href = originUrl;
            var hostname = url.hostname;
            var result = false;
            if( typeof hostname !== 'undefined' ) {
              whitelisted_domains.forEach(function(element) {
                  if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                      result = true;
                  }
              });
              return result;
            }
          };
          if (window.addEventListener) {
            window.addEventListener("message", handleIFrameMessage, false);
          } else if (window.attachEvent) {
            window.attachEvent("onmessage", handleIFrameMessage);
          }
        `}
      </script>
    </>
  );
};

export default YouthPage;