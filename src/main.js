import { GoogleGenAI } from "@google/genai";

// -------------------------------------------------------------------------
// CONFIG & INITIALIZATION
// -------------------------------------------------------------------------

const GENAI_KEY = process.env.GEMINI_API_KEY;

// -------------------------------------------------------------------------
// STATE & REFS
// -------------------------------------------------------------------------

// Page state logic here...

// -------------------------------------------------------------------------
// LUXURY REVEALS
// -------------------------------------------------------------------------

function initLuxuryReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a list or has children reveals, stagger them
                if (entry.target.classList.contains('reveal-stagger')) {
                    const children = entry.target.querySelectorAll('.reveal-item, .reveal-text');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                        child.classList.add('active');
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text, .reveal-item, .reveal-stagger').forEach(el => observer.observe(el));

    // Force hero section reveals to fire immediately
    setTimeout(() => {
        const heroReveals = document.querySelectorAll('main > section:first-of-type .reveal-text, main > section:first-of-type .reveal-item');
        heroReveals.forEach(el => el.classList.add('active'));
    }, 100);
}

// -------------------------------------------------------------------------
// REFINED CURSOR & STICKY NAV
// -------------------------------------------------------------------------

function initUI() {
    const nav = document.querySelector('.luxury-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            menuToggle.innerText = mobileMenu.classList.contains('active') ? 'Close' : 'Menu';
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuToggle.innerText = 'Menu';
                document.body.style.overflow = '';
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && e.target !== menuToggle) {
                mobileMenu.classList.remove('active');
                menuToggle.innerText = 'Menu';
                document.body.style.overflow = '';
            }
        });
    }

    // Sticky Nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });
}

// -------------------------------------------------------------------------
// HERO SLIDE-UP (AUTO SCROLL)
// -------------------------------------------------------------------------

function initHeroSlide() {
    const pages = ['/about.html', '/services.html', '/gallery.html', '/book.html', '/about', '/services', '/gallery', '/book'];
    const currentPath = window.location.pathname;

    if (pages.some(p => currentPath === p || currentPath.endsWith(p))) {
        // Wait for page reading time
        setTimeout(() => {
            const hero = document.querySelector('main > section:first-of-type');
            const nextSection = hero?.nextElementSibling;
            
            if (nextSection && window.scrollY < 10) { // Only auto-scroll if user hasn't scrolled yet
                window.scrollTo({
                    top: nextSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 3000); 
    }
}

// -------------------------------------------------------------------------
// GOOGLE MAPS INTEGRATION
// -------------------------------------------------------------------------

async function initMaps() {
    const footerMapContainer = document.getElementById('shop-map-footer');
    const heroMapContainer = document.getElementById('shop-map-hero');

    if (!footerMapContainer && !heroMapContainer) return;

    const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
    if (!API_KEY) {
        console.warn('Google Maps API Key missing. Please add GOOGLE_MAPS_PLATFORM_KEY to your secrets.');
        return;
    }

    // Bootstrap Loader
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. See https://goo.gle/js-api-loading"):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
        key: API_KEY,
        v: "weekly"
    });

    try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

        const position = { lat: 33.6406, lng: -112.0626 }; // Phoenix Shop Location
        
        const mapOptions = {
            zoom: 15,
            center: position,
            mapId: "CLEAN_CUT_SHOP_MAP",
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
            styles: [
                { "elementType": "geometry", "stylers": [{ "color": "#121212" }] },
                { "elementType": "labels.text.stroke", "stylers": [{ "color": "#121212" }] },
                { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] },
                // Custom dark theme styles here...
            ]
        };

        const createMapWithMarker = (container) => {
            const map = new Map(container, mapOptions);
            
            const pin = new PinElement({
                background: "#d4af37",
                borderColor: "#121212",
                glyphColor: "#121212",
                scale: 1.2
            });

            new AdvancedMarkerElement({
                map: map,
                position: position,
                title: "Clean Cut Barber Shop",
                content: pin.element
            });
        };

        if (footerMapContainer) createMapWithMarker(footerMapContainer);
        if (heroMapContainer) createMapWithMarker(heroMapContainer);

    } catch (error) {
        console.error("Error loading Google Maps:", error);
    }
}

// -------------------------------------------------------------------------
// INITIALIZE
// -------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initLuxuryReveal();
    initHeroSlide();
    initMaps();
});
