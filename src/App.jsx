import { useMemo, useState } from 'react'
import './App.scss'
import jumpStarterCollage from './assets/product-jumpstarter-collage.png'
import jumpStarterOffer from './assets/product-jumpstarter-offer.png'
import mirrorMain from './assets/product-mirror-main.png'
import mirrorUsage from './assets/product-mirror-usage.png'

function App() {
  const products = useMemo(
    () => [
      {
        id: 1,
        name: 'بوستر تشغيل مع منفاخ',
        price: 179,
        oldPrice: 250,
        ad: 'عرض خاص',
        description:
          'بوستر تشغيل قوي مع منفاخ متعدد الاستخدامات، مناسب للطوارئ مع إضاءة مدمجة.',
        image: jumpStarterOffer,
      },
      {
        id: 2,
        name: 'مرآة مكياج للسيارة',
        price: 60,
        pricing: [
          { quantity: 1, price: 60 },
          { quantity: 2, price: 100 },
        ],
        oldPrice: 0,
        ad: 'الأكثر طلبا',
        description:
          'مرآة بإضاءة ناعمة وثابتة، تثبيت سهل على شماسة السيارة ومناسبة للاستخدام اليومي.',
        image: mirrorMain,
      },
      {
        id: 3,
        name: 'بوستر تشغيل + اكسسوارات',
        price: 179,
        oldPrice: 250,
        ad: 'باقة متكاملة',
        description:
          'عرض يوضح المنتج مع الكوابل والإضافات المناسبة للسيارة والاستخدام الخارجي.',
        image: jumpStarterCollage,
      },
      {
        id: 4,
        name: 'مرآة مكياج - قبل/بعد',
        price: 60,
        pricing: [
          { quantity: 1, price: 60 },
          { quantity: 2, price: 100 },
        ],
        oldPrice: 0,
        ad: 'جديد',
        description:
          'مشاهدة طريقة الاستخدام داخل السيارة بشكل عملي وواضح لنتيجة أفضل.',
        image: mirrorUsage,
      },
    ],
    [],
  )
  const [favorites, setFavorites] = useState([])

  const promoAds = useMemo(
    () => [
      {
        id: 'promo-jump',
        kicker: 'إكسسوارات السيارة',
        title: 'بوستر + منفاخ',
        sub: 'عرض ١٧٩ شيقل',
        image: jumpStarterOffer,
        alt: 'بوستر تشغيل مع منفاخ',
      },
      {
        id: 'promo-mirror',
        kicker: 'الأكثر طلباً',
        title: 'مرآة مكياج مع إضاءة',
        sub: 'واحدة بـ 60 شيقل أو اثنتين بـ 100 شيقل',
        image: mirrorMain,
        alt: 'مرآة مكياج للسيارة',
      },
      {
        id: 'promo-bundle',
        kicker: 'باقة كاملة',
        title: 'بوستر مع الملحقات',
        sub: '١٧٩ شيقل',
        image: jumpStarterCollage,
        alt: 'بوستر تشغيل مع الاكسسوارات',
      },
      {
        id: 'promo-mirror-usage',
        kicker: 'جديد',
        title: 'مرآة قبل وبعد',
        sub: 'واحدة بـ 60 شيقل أو اثنتين بـ 100 شيقل',
        image: mirrorUsage,
        alt: 'مرآة مكياج داخل السيارة',
      },
    ],
    [],
  )

  const toggleFavorite = (productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(productId)
        ? currentFavorites.filter((id) => id !== productId)
        : [...currentFavorites, productId],
    )
  }

  return (
    <div className="storefront">
      <nav
        className="social-float"
        aria-label="التواصل ووسائل التواصل الاجتماعي"
      >
        <a
          className="social-float__link social-float__link--whatsapp"
          href="https://wa.me/970566221530"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="واتساب"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
            <path
              fill="currentColor"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.688 5.949L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.404z"
            />
          </svg>
        </a>
        <a
          className="social-float__link social-float__link--instagram"
          href="https://www.instagram.com/thamanyahofficial/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="إنستغرام"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
            <path
              fill="currentColor"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.354 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881.001 1.44 1.44 0 012.881-.001z"
            />
          </svg>
        </a>
        <a
          className="social-float__link social-float__link--facebook"
          href="https://www.facebook.com/Thamaniyah2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="فيسبوك"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
            <path
              fill="currentColor"
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
          </svg>
        </a>
        <a
          className="social-float__link social-float__link--email"
          href="mailto:tradingthamania@gmail.com"
          aria-label="البريد الإلكتروني tradingthamania@gmail.com"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </a>
      </nav>

      <section className="ads-bar" aria-label="عرض اليوم">
        <p>عرض اليوم: بوستر التشغيل مع المنفاخ الآن بسعر ١٧٩ شيقل فقط</p>
      </section>

      <header className="hero">
        <div className="hero__content">
          <p className="hero__kicker">ثمانية التجارية</p>
          <h1>منتجات مميزة وتجربة تسوق عصرية</h1>
          <p className="hero__text">
            نقدّم لك إكسسوارات السيارات ومنتجات مختارة بعناية، بجودة موثوقة
            وتصاميم أنيقة تسهّل يومك.
          </p>
          <div className="hero__actions">
            <button type="button" className="button button--primary">
              تسوق الآن
            </button>
            <button type="button" className="button button--ghost">
              عن المتجر
            </button>
          </div>
        </div>
        <div className="hero__stats">
          <article>
            <span>+٢٥٠٠</span>
            <p>عميل سعيد</p>
          </article>
          <article>
            <span>٩٨٪</span>
            <p>رضا العملاء</p>
          </article>
          <article>
            <span>٢٤/٧</span>
            <p>دعم واستفسار</p>
          </article>
        </div>
      </header>

      <section className="promo-ads" aria-labelledby="promo-ads-heading">
        <h2 id="promo-ads-heading" className="promo-ads__heading">
          عروض وإعلانات
        </h2>
        <div className="promo-ads__slider" aria-hidden="true">
          <div className="promo-ads__track">
            {[...promoAds, ...promoAds].map((ad, index) => (
              <article
                key={`${ad.id}-${index}`}
                className="promo-ad promo-ad--slide"
              >
                <div className="promo-ad__copy">
                  <span className="promo-ad__kicker">{ad.kicker}</span>
                  <h3 className="promo-ad__title">{ad.title}</h3>
                  <p className="promo-ad__sub">{ad.sub}</p>
                  <button type="button" className="promo-ad__cta">
                    تسوق الآن
                  </button>
                </div>
                <div className="promo-ad__visual">
                  <img src={ad.image} alt="" />
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="promo-ads__sr-only">
          عروض متحركة: بوستر مع منفاخ ١٧٩ شيقل، مرآة مكياج مع إضاءة، باقة بوستر
          مع الملحقات، مرآة قبل وبعد.
        </p>
      </section>

      <section className="products">
        <div className="products__header">
          <h2>منتجات مميزة</h2>
          <p>
            اكتشف منتجاتنا، العروض، والمفضلة لديك في عرض واحد أنيق وسهل التصفح.
          </p>
        </div>
        <div className="products__grid">
          {products.map((product) => {
            const isFavorite = favorites.includes(product.id)
            return (
              <article key={product.id} className="product-card">
                <figure className="product-card__image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="product-card__ad">{product.ad}</span>
                  <button
                    type="button"
                    className={`favorite-button ${isFavorite ? 'is-active' : ''}`}
                    aria-label={
                      isFavorite
                        ? `إزالة ${product.name} من المفضلة`
                        : `إضافة ${product.name} للمفضلة`
                    }
                    onClick={() => toggleFavorite(product.id)}
                  >
                    {isFavorite ? '❤' : '♡'}
                  </button>
                </figure>
                <div className="product-card__body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card__price">
                    <strong>{product.price} شيقل</strong>
                    {product.oldPrice > 0 ? <span>{product.oldPrice} شيقل</span> : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <footer className="footer">
        <div className="footer__about">
          <h4>ثمانية التجارية</h4>
          <p>
            متجر إلكتروني لعرض منتجاتنا بأسلوب عصري وجذاب. للطلب والاستفسار
            يُرجى التواصل عبر الأيقونات على جانب الصفحة.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
