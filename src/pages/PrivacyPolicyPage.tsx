import LegalPageShell, {
  LegalSection,
  LegalSub,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "../lib/LegalPageShell";
import brand from "../brand.config";
import { bi } from "../i18n/types";
import { useT } from "../i18n/useT";
import { useLanguage } from "../i18n/LanguageContext";
import { dict } from "../i18n/dictionary";

const CANONICAL = `${brand.siteUrl}/privacy-policy/`;

const TOC = [
  { id: "intro", label: bi("المقدمة والنطاق", "Introduction & Scope") },
  {
    id: "info-we-collect",
    label: bi("المعلومات التي نجمعها", "Information We Collect"),
  },
  {
    id: "how-we-use",
    label: bi("كيف نستخدم المعلومات", "How We Use Information"),
  },
  {
    id: "ai",
    label: bi("معالجة الذكاء الاصطناعي", "AI Processing"),
  },
  { id: "legal-bases", label: bi("الأسس القانونية", "Legal Bases") },
  {
    id: "data-sharing",
    label: bi(
      "الاستضافة ومشاركة البيانات والمعالجون",
      "Hosting, Data Sharing & Processors",
    ),
  },
  {
    id: "transfers",
    label: bi("النقل الدولي", "International Transfers"),
  },
  { id: "retention", label: bi("الاحتفاظ بالبيانات", "Data Retention") },
  { id: "your-rights", label: bi("حقوقك", "Your Rights") },
  { id: "children", label: bi("الأطفال", "Children") },
  {
    id: "cookies",
    label: bi("ملفات تعريف الارتباط والتتبع", "Cookies & Tracking"),
  },
  { id: "security", label: bi("الأمان", "Security") },
  {
    id: "changes",
    label: bi("تعديل هذه السياسة", "Changes to This Policy"),
  },
  { id: "contact", label: bi("التواصل", "Contact") },
] as const;

function lastUpdatedLabel(lang: "ar" | "en") {
  return lang === "ar" ? "1 يناير 2026" : brand.legalEffectiveDate;
}

function hostingSummary(lang: "ar" | "en") {
  if (lang === "ar") {
    return "تُستضاف الخدمة وبياناتك على خوادم مخصّصة آمنة وبنية سحابية داخل الاتحاد الأوروبي (ألمانيا، ومنطقة الاتحاد الأوروبي لمزوّدنا السحابي). تُشفَّر البيانات أثناء النقل عبر TLS، وتُشفَّر بيانات الاعتماد والرموز الحساسة للحساب أثناء التخزين.";
  }
  return brand.infrastructure.hostingSummary;
}

function transfersNote(lang: "ar" | "en") {
  if (lang === "ar") {
    return "تقع بنيتنا التحتية أساساً في الاتحاد الأوروبي. وحيث يعالج معالج فرعي (مثل مزوّد دفع أو بريد) بيانات خارج الاتحاد الأوروبي، نعتمد على البنود التعاقدية القياسية للمفوضية الأوروبية أو آلية نقل قانونية أخرى.";
  }
  return brand.infrastructure.transfersNote;
}

function retentionCopy(lang: "ar" | "en") {
  if (lang === "ar") {
    return {
      conversations:
        "تُحفظ عمليات البحث المحفوظة وقوائم العملاء المحتملين وبيانات الحساب طوال مدة الحساب، وتُحذف من الأنظمة النشطة خلال 90 يوماً من إغلاق الحساب، ما لم يتطلب القانون مدة أطول.",
      backups: "تُحفظ النسخ الاحتياطية المشفّرة بشكل دوري لمدة تصل إلى 30 يوماً.",
      logs: "تُحفظ سجلات الخادم وأحداث الأمان لمدة تصل إلى 90 يوماً.",
    };
  }
  return brand.infrastructure.retention;
}

function subProcessorRows(lang: "ar" | "en") {
  if (lang === "ar") {
    return [
      [
        "استضافة سحابية وخوادم (مثل Hetzner وGoogle Cloud — مناطق الاتحاد الأوروبي)",
        "استضافة التطبيق وقواعد البيانات والنسخ الاحتياطية المشفّرة",
        "الاتحاد الأوروبي",
      ],
      [
        "معالج الدفع (مثل Stripe)",
        "الفوترة ومنع الاحتيال",
        "الاتحاد الأوروبي / الولايات المتحدة",
      ],
      [
        "أدوات البريد والتحليلات",
        "البريد التشغيلي والتسويقي، وتحليلات استخدام المنتج",
        "الاتحاد الأوروبي / الولايات المتحدة",
      ],
    ];
  }
  return brand.infrastructure.subProcessors.map((s) => [
    s.name,
    s.purpose,
    s.location,
  ]);
}

export default function PrivacyPolicyPage() {
  const t = useT();
  const { lang } = useLanguage();
  const date = lastUpdatedLabel(lang);
  const retention = retentionCopy(lang);
  const jurisdictionLabel =
    lang === "ar" ? "سلطنة عُمان" : brand.legalJurisdiction;

  return (
    <LegalPageShell
      title={t(dict.privacyPage.title)}
      lastUpdated={date}
      metaTitle={t(dict.privacyPage.metaTitle)}
      metaDescription={t(dict.privacyPage.meta)}
      canonical={CANONICAL}
      toc={TOC.map((item) => ({ id: item.id, label: t(item.label) }))}
      intro={
        <>
          <p>
            {t(
              bi(
                `توضح سياسة الخصوصية هذه كيف تجمع ${brand.legalEntity} («${brand.brandName}»، «نحن»، «لنا») البيانات الشخصية وتستخدمها وتشاركها وتحميها عند استخدامك لـ ${brand.domain} وتطبيقنا وأي خدمات ذات صلة.`,
                `This Privacy Policy explains how ${brand.legalEntity} (“${brand.brandName}”, “we”, “us”) collects, uses, shares and protects personal data when you use ${brand.domain}, our app and any related services.`,
              ),
            )}
          </p>
          <p>
            {t(
              bi(
                "المصطلحات المعرّفة هنا لها المعاني الواردة في شروط الخدمة. تُطبَّق هذه السياسة وفقاً لقوانين الخصوصية التي تنطبق عليك وعلى عملائك (مثل اللائحة العامة لحماية البيانات في الاتحاد الأوروبي/المملكة المتحدة وقوانين حماية البيانات المحلية الأخرى، بما في ذلك ما ينطبق في سلطنة عُمان).",
                "Defined terms used here have the meanings given in our Terms of Service. This policy is intended to align with the privacy laws that apply to you and your customers (for example the EU/UK GDPR and other local data-protection laws, including those applicable in the Sultanate of Oman).",
              ),
            )}
          </p>
        </>
      }
    >
      <LegalSection id="intro" number={1} title={t(TOC[0].label)}>
        <LegalP>
          {t(
            bi(
              `تُعدّ ${brand.legalEntity} مسؤولة عن البيانات الشخصية الموضحة في هذه السياسة. نعمل كمتحكم بالبيانات للبيانات الشخصية المتعلقة بحسابك والفوترة وطلبات الدعم وعملياتنا الخاصة. ونعمل كمعالج بيانات للبيانات الشخصية الواردة في الرسائل وجهات الاتصال والمحادثات التي تعالجها أنت ومستخدموك النهائيون عبر الخدمة.`,
              `${brand.legalEntity} is responsible for the personal data described in this policy. We act as the data controller for personal data relating to your account, billing, support requests and our own operations. We act as a data processor for the personal data contained in the messages, contacts and conversations that you and your end users process through the service.`,
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              `تنطبق هذه السياسة على ${brand.domain} وتطبيقنا وواجهات برمجة التطبيقات لدينا. تاريخ سريان هذه السياسة هو ${date}.`,
              `This policy applies to ${brand.domain}, our application and our APIs. The Effective Date of this policy is ${brand.legalEffectiveDate}.`,
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="info-we-collect" number={2} title={t(TOC[1].label)}>
        <LegalSub>
          {t(
            bi(
              "معلومات تقدّمها لنا مباشرة",
              "Information you give us directly",
            ),
          )}
        </LegalSub>
        <LegalUl>
          <li>
            {t(
              bi(
                "معلومات الحساب: الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة، الدور وتفاصيل الفوترة",
                "Account information: name, email address, phone number, company name, role and billing details",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "بيانات الملف: المنطقة الزمنية وتفضيلات اللغة وإعدادات الإشعارات",
                "Profile data: time zone, language preferences and notification settings",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "إعداد مساحة العمل: تعليمات الروبوت ومحتوى الأسئلة الشائعة وقاعدة المعرفة وإعدادات التكامل",
                "Workspace configuration: bot instructions, FAQ and knowledge-base content, and integration settings",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "التواصل معنا: تذاكر الدعم والمحادثات والرسائل، بما في ذلك المرفقات التي تختار مشاركتها",
                "Communications with us: support tickets, chats and emails, including attachments you choose to share",
              ),
            )}
          </li>
        </LegalUl>
        <LegalSub>
          {t(
            bi(
              "بيانات الأعمال التي تعالجها عبر الخدمة",
              "Business data you process through the service",
            ),
          )}
        </LegalSub>
        <LegalUl>
          <li>
            {t(
              bi(
                "جهات الاتصال التي تستوردها أو التي تصل عبر الرسائل الواردة (الاسم، الهاتف، البريد، معرّفات التواصل الاجتماعي والحقول المخصّصة)",
                "Contacts you import or that arrive through inbound messages (name, phone, email, social identifiers and custom fields)",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "محتوى المحادثات عبر القنوات التي تربطها (نص، ملاحظات صوتية، صور، فيديو ومستندات يرسلها مستخدموك النهائيون)",
                "Conversation content across the channels you connect (text, voice notes, images, video and documents your end users send)",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "موارد المعرفة التي تقدّمها لتدريب الذكاء الاصطناعي",
                "Knowledge resources you provide to train the AI",
              ),
            )}
          </li>
        </LegalUl>
        <LegalSub>
          {t(bi("معلومات الدفع", "Payment information"))}
        </LegalSub>
        <LegalP>
          {t(
            bi(
              "عند الاشتراك في خطة مدفوعة، تُعالَج معلومات الدفع عبر معالج الدفع لدينا. لا نخزّن أرقام البطاقات الكاملة على خوادمنا؛ وقد نخزّن رمزاً مميزاً، وآخر أربعة أرقام من بطاقتك، وعلامة البطاقة، وعنوان الفوترة.",
              "When you subscribe to a paid plan, payment information is handled by our payment processor. We do not store full card numbers on our servers; we may store a token, the last four digits of your card, the card brand and your billing address.",
            ),
          )}
        </LegalP>
        <LegalSub>
          {t(
            bi(
              "معلومات نجمعها تلقائياً",
              "Information we collect automatically",
            ),
          )}
        </LegalSub>
        <LegalUl>
          <li>
            {t(
              bi(
                "قياسات الاستخدام: الصفحات التي زُرت والميزات المستخدمة والأخطاء التي واجهتها",
                "Usage telemetry: pages visited, features used and errors encountered",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "بيانات الجهاز والاتصال: عنوان IP والمتصفح ونظام التشغيل وعنوان الإحالة",
                "Device and connection data: IP address, browser, operating system and referrer URL",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "سجلات الخادم وأحداث الأمان، بما في ذلك محاولات المصادقة",
                "Server logs and security events, including authentication attempts",
              ),
            )}
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="how-we-use" number={3} title={t(TOC[2].label)}>
        <LegalUl>
          <li>
            {t(
              bi(
                "لتقديم الخدمة وتشغيلها وصيانتها وتحسينها",
                "To provide, operate, maintain and improve the service",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "لمعالجة محادثات الذكاء الاصطناعي وفهم الوسائط (مثل التحويل إلى نص وتحليل الصور)",
                "To process AI conversations and media understanding (such as transcription and image analysis)",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "لإرسال الرسائل وقياسها عبر القنوات التي تربطها",
                "To deliver and meter messages across the channels you connect",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "لتقديم دعم العملاء والرد على طلباتك",
                "To provide customer support and respond to your requests",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "لمعالجة الفوترة وإدارة اشتراكك واكتشاف الاحتيال",
                "To process billing, manage your subscription and detect fraud",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "لتأمين الخدمة ومنع إساءة الاستخدام والحوادث الأمنية",
                "To secure the service and prevent abuse and security incidents",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "لإرسال رسائل الخدمة، ومع موافقتك المنفصلة رسائل تسويقية",
                "To send service emails and, with your separate consent, marketing emails",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "للامتثال للالتزامات القانونية والرد على الطلبات المشروعة",
                "To comply with legal obligations and respond to lawful requests",
              ),
            )}
          </li>
        </LegalUl>
        <LegalP>
          {t(
            bi(
              "لا نبيع البيانات الشخصية ولا نشاركها مع معلنين من أطراف ثالثة للإعلانات السلوكية عبر السياقات.",
              "We do not sell personal data and we do not share personal data with third-party advertisers for cross-context behavioural advertising.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="ai" number={4} title={t(TOC[3].label)}>
        <LegalCallout>
          {t(
            bi(
              "لا نستخدم بيانات العميل لتدريب نماذج الذكاء الاصطناعي، ويعالج مزوّدو الذكاء الاصطناعي لدينا الطلبات بموجب شروط تحظر التدريب على بيانات عملائنا.",
              "We do not use Customer Data to train AI models, and our AI providers process our requests under terms that prohibit training on our customers’ data.",
            ),
          )}
        </LegalCallout>
        <LegalP>
          {t(
            bi(
              "تُعالَج محادثات الذكاء الاصطناعي ومهام معينة لفهم الوسائط (مثل التحويل إلى نص وفهم الصور أو الفيديو) عبر مزوّدي الذكاء الاصطناعي لدينا. أنت المتحكم بالبيانات لرسائل المستخدمين النهائيين التي تعالجها عبر الخدمة؛ ونعمل كمعالج لك لتلك البيانات ونعالجها فقط وفق تعليماتك الموثّقة.",
              "AI conversations and certain media-processing tasks (such as transcription and image or video understanding) are handled by our AI providers. You are the data controller for the end-user messages you process through the service; we act as your processor for that data and process it only on your documented instructions.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="legal-bases" number={5} title={t(TOC[4].label)}>
        <LegalP>
          {t(
            bi(
              "حيث يتطلب قانون حماية البيانات (مثل اللائحة العامة لحماية البيانات في الاتحاد الأوروبي/المملكة المتحدة) أساساً قانونياً، نعتمد على ما يلي:",
              "Where data-protection law (such as the EU/UK GDPR) requires a legal basis, we rely on the following:",
            ),
          )}
        </LegalP>
        <LegalUl>
          <li>
            <strong>
              {t(bi("تنفيذ العقد:", "Contract performance:"))}
            </strong>{" "}
            {t(
              bi(
                "المعالجة اللازمة لتقديم الخدمة التي اشتركت فيها",
                "processing necessary to provide the service you signed up for",
              ),
            )}
          </li>
          <li>
            <strong>
              {t(bi("المصالح المشروعة:", "Legitimate interests:"))}
            </strong>{" "}
            {t(
              bi(
                "الأمان ومنع الاحتيال وتحسين المنتج والدفاع عن المطالبات القانونية، مع إمكانية الانسحاب بسهولة حيث ينطبق ذلك",
                "security, fraud prevention, product improvement and defending legal claims, with an easy opt-out where applicable",
              ),
            )}
          </li>
          <li>
            <strong>{t(bi("الموافقة:", "Consent:"))}</strong>{" "}
            {t(
              bi(
                "الرسائل التسويقية، وتحليلات اختيارية أو ملفات تعريف ارتباط تسويقية، وأي معالجة تتطلب موافقة",
                "marketing emails, optional analytics or marketing cookies, and any processing that requires consent",
              ),
            )}
          </li>
          <li>
            <strong>
              {t(bi("الالتزام القانوني:", "Legal obligation:"))}
            </strong>{" "}
            {t(
              bi(
                "المتطلبات الضريبية والمحاسبية والتنظيمية الأخرى التي تنطبق علينا",
                "tax, accounting and other regulatory requirements that apply to us",
              ),
            )}
          </li>
        </LegalUl>
        <LegalP>
          {t(
            bi(
              `يمكنك الاعتراض على المعالجة القائمة على المصالح المشروعة، أو سحب الموافقة، في أي وقت بالتواصل على ${brand.supportEmail}.`,
              `You can object to processing based on legitimate interests, or withdraw consent, at any time by contacting ${brand.supportEmail}.`,
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="data-sharing" number={6} title={t(TOC[5].label)}>
        <LegalSub>
          {t(bi("أين تُستضاف بياناتك", "Where your data is hosted"))}
        </LegalSub>
        <LegalP>{hostingSummary(lang)}</LegalP>
        <LegalSub>
          {t(bi("المعالجون الفرعيون", "Sub-processors"))}
        </LegalSub>
        <LegalP>
          {t(
            bi(
              `نحن والمنصة الأساسية التي تشغّل الخدمة نعتمد على فئات المعالجين الفرعيين التالية للتعامل مع البيانات الشخصية. ونلزم كلاً منهم بمعالجة البيانات الشخصية فقط بموجب شروط حماية بيانات مناسبة. قد يتغيّر المزوّدون المحددون مع الوقت؛ وهذه القائمة حديثة اعتباراً من ${date}.`,
              `We and the underlying platform that powers the service rely on the following categories of sub-processor to handle personal data. We require each of them to process personal data only under appropriate data-protection terms. The specific providers may change over time; this list is current as of ${brand.legalEffectiveDate}.`,
            ),
          )}
        </LegalP>
        <LegalTable
          headers={[
            t(bi("المعالج الفرعي", "Sub-processor")),
            t(bi("الغرض", "Purpose")),
            t(bi("الموقع الأساسي", "Primary Location")),
          ]}
          rows={subProcessorRows(lang)}
        />
        <LegalP>
          {t(
            bi(
              "لا نبيع البيانات الشخصية. قد نشارك البيانات مع مستشارين مهنيين بموجب التزامات سرية، وفي إطار اندماج أو استحواذ أو بيع أصول مع ضمانات مناسبة.",
              "We do not sell personal data. We may share data with professional advisors under confidentiality obligations, and in connection with a merger, acquisition or sale of assets subject to appropriate protections.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="transfers" number={7} title={t(TOC[6].label)}>
        <LegalP>{transfersNote(lang)}</LegalP>
        <LegalP>
          {t(
            bi(
              "حيث تُنقل بيانات شخصية خارج منطقتك أو منطقة مستخدميك النهائيين، نعتمد على ضمانات مناسبة مثل البنود التعاقدية القياسية ذات الصلة، أو قرار ملاءمة معمول به، أو آلية نقل قانونية أخرى.",
              "Where personal data is transferred outside your or your end users’ region, we rely on appropriate safeguards such as the relevant standard contractual clauses, an applicable adequacy decision, or another lawful transfer mechanism.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="retention" number={8} title={t(TOC[7].label)}>
        <LegalUl>
          <li>
            <strong>
              {t(bi("بيانات الحساب النشط:", "Active account data:"))}
            </strong>{" "}
            {t(
              bi(
                "تُحفظ طوال مدة حسابك",
                "retained for the life of your account",
              ),
            )}
          </li>
          <li>
            <strong>
              {t(
                bi(
                  "بيانات المحادثات والرسائل:",
                  "Conversation and message data:",
                ),
              )}
            </strong>{" "}
            {retention.conversations}
          </li>
          <li>
            <strong>
              {t(bi("السجلات المالية:", "Financial records:"))}
            </strong>{" "}
            {t(
              bi(
                `تُحفظ للمدة التي يتطلبها قانون الضرائب في ${jurisdictionLabel}`,
                `retained for the period required by tax law in ${brand.legalJurisdiction}`,
              ),
            )}
          </li>
          <li>
            <strong>{t(bi("النسخ الاحتياطية:", "Backups:"))}</strong>{" "}
            {retention.backups}
          </li>
          <li>
            <strong>
              {t(
                bi(
                  "سجلات الخادم وأحداث الأمان:",
                  "Server logs and security events:",
                ),
              )}
            </strong>{" "}
            {retention.logs}
          </li>
        </LegalUl>
        <LegalP>
          {t(
            bi(
              "عند الإلغاء يمكنك تصدير بياناتك لفترة معقولة، وبعدها نحذف بيانات العميل من الأنظمة النشطة في المسار الاعتيادي.",
              "When you cancel, you can export your data for a reasonable period, after which we will delete Customer Data from active systems in the normal course.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="your-rights" number={9} title={t(TOC[8].label)}>
        <LegalP>
          {t(
            bi(
              "حسب مكان إقامتك، قد تتمتع ببعض أو كل الحقوق التالية على بياناتك الشخصية:",
              "Depending on where you live, you may have some or all of the following rights over your personal data:",
            ),
          )}
        </LegalP>
        <LegalUl>
          <li>
            {t(
              bi(
                "الحق في الوصول إلى البيانات الشخصية التي نحتفظ بها عنك",
                "The right to access the personal data we hold about you",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "الحق في تصحيح البيانات الشخصية غير الدقيقة",
                "The right to correct inaccurate personal data",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "الحق في حذف بياناتك الشخصية، مع مراعاة الحدود القانونية",
                "The right to delete your personal data, subject to legal limits",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "الحق في تقييد المعالجة أو الاعتراض عليها",
                "The right to restrict or object to processing",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "الحق في نقل البيانات بصيغة منظّمة قابلة للقراءة آلياً",
                "The right to data portability in a structured, machine-readable format",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "الحق في سحب الموافقة في أي وقت، دون التأثير على المعالجة السابقة",
                "The right to withdraw consent at any time, without affecting prior processing",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "الحق في تقديم شكوى إلى سلطة حماية البيانات المحلية لديك",
                "The right to lodge a complaint with your local data-protection authority",
              ),
            )}
          </li>
        </LegalUl>
        <LegalP>
          {t(
            bi(
              `لممارسة هذه الحقوق، تواصل معنا على ${brand.supportEmail}. سنرد خلال المهلة التي يتطلبها القانون المعمول به، وقد نحتاج أولاً إلى التحقق من هويتك.`,
              `To exercise these rights, contact us at ${brand.supportEmail}. We will respond within the timeframe required by applicable law and may need to verify your identity first.`,
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="children" number={10} title={t(TOC[9].label)}>
        <LegalP>
          {t(
            bi(
              `الخدمة مخصّصة للاستخدام التجاري وليست موجّهة للأطفال. لا نجمع عن علم بيانات شخصية من الأطفال. إذا اعتقدت أن طفلاً قد قدّم لنا بيانات شخصية، فتواصل على ${brand.supportEmail} وسنحذفها.`,
              `The service is intended for business use and is not directed to children. We do not knowingly collect personal data from children. If you believe a child has provided personal data to us, contact ${brand.supportEmail} and we will delete it.`,
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="cookies" number={11} title={t(TOC[10].label)}>
        <LegalP>
          {t(
            bi(
              "نستخدم ملفات تعريف الارتباط وتقنيات مشابهة للأغراض التالية:",
              "We use cookies and similar technologies for the following purposes:",
            ),
          )}
        </LegalP>
        <LegalUl>
          <li>
            <strong>
              {t(bi("ملفات أساسية:", "Essential cookies:"))}
            </strong>{" "}
            {t(
              bi(
                "المصادقة وإدارة الجلسة والأمان — لازمة لعمل الخدمة",
                "authentication, session management and security — required for the service to function",
              ),
            )}
          </li>
          <li>
            <strong>
              {t(bi("ملفات وظيفية:", "Functional cookies:"))}
            </strong>{" "}
            {t(
              bi(
                "تذكّر تفضيلاتك مثل اللغة وإعدادات الواجهة",
                "remembering your preferences such as language and UI settings",
              ),
            )}
          </li>
          <li>
            <strong>
              {t(bi("ملفات تحليلات:", "Analytics cookies:"))}
            </strong>{" "}
            {t(
              bi(
                "فهم كيفية استخدام الخدمة — تُضبط فقط بموافقتك حيث يلزم",
                "understanding how the service is used — set only with your consent where required",
              ),
            )}
          </li>
          <li>
            <strong>
              {t(bi("ملفات تسويقية:", "Marketing cookies:"))}
            </strong>{" "}
            {t(
              bi(
                "قياس الحملات التسويقية على موقعنا العام — تُضبط فقط بموافقتك حيث يلزم",
                "measuring marketing campaigns on our public website — set only with your consent where required",
              ),
            )}
          </li>
        </LegalUl>
        <LegalP>
          {t(
            bi(
              "يمكنك تغيير تفضيلات ملفات تعريف الارتباط في أي وقت عبر متصفحك أو أي أدوات تحكم نوفرها.",
              "You can change your cookie preferences at any time through your browser or any cookie controls we provide.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="security" number={12} title={t(TOC[11].label)}>
        <LegalP>
          {t(
            bi(
              "نستخدم تدابير إدارية وتقنية وتنظيمية لحماية البيانات الشخصية، بما في ذلك:",
              "We use administrative, technical and organisational measures to protect personal data, including:",
            ),
          )}
        </LegalP>
        <LegalUl>
          <li>
            {t(
              bi(
                "تشفير البيانات أثناء النقل باستخدام TLS",
                "Encryption of data in transit using TLS",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "التشفير أثناء التخزين للحقول الحساسة مثل بيانات الاعتماد ورموز التكامل",
                "Encryption at rest for sensitive fields such as credentials and integration tokens",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "التحكم في الوصول حسب الدور مع مبدأ أقل صلاحية",
                "Role-based access control with least-privilege principles",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "تسجيل الإجراءات الإدارية",
                "Logging of administrative actions",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "عملية موثّقة للاستجابة للحوادث",
                "A documented incident-response process",
              ),
            )}
          </li>
        </LegalUl>
        <LegalP>
          {t(
            bi(
              "لا يمكن لأي نظام أن يكون آمناً بالكامل. إذا علمنا بانتهاك بيانات شخصية يُحتمل أن يؤدي إلى خطر على حقوقك، فسنُبلغ السلطة المختصة والمستخدمين المتأثرين كما يقتضي القانون المعمول به.",
              "No system can be completely secure. If we become aware of a personal data breach that is likely to result in a risk to your rights, we will notify the relevant authority and affected users as required by applicable law.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" number={13} title={t(TOC[12].label)}>
        <LegalP>
          {t(
            bi(
              "قد نحدّث هذه السياسة من وقت لآخر. للتغييرات الجوهرية سنمنح إشعاراً مسبقاً معقولاً بالبريد أو داخل التطبيق قبل سريان التغييرات. للتغييرات غير الجوهرية سننشر السياسة المحدّثة هنا مع تاريخ «آخر تحديث» منقّح.",
              "We may update this policy from time to time. For material changes we will give reasonable advance notice by email or in-app notice before the changes take effect. For non-material changes we will post the updated policy here with a revised “Last updated” date.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" number={14} title={t(TOC[13].label)}>
        <LegalP>
          {t(
            bi(
              "لأسئلة الخصوصية أو لممارسة حقوقك، تواصل معنا. يُرجى تضمين معلومات كافية للتحقق من هويتك والتصرف بناءً على طلبك.",
              "For privacy questions or to exercise your rights, contact us. Please include enough information for us to verify your identity and act on your request.",
            ),
          )}
        </LegalP>
        <LegalUl>
          <li>{brand.legalEntity}</li>
          <li>{jurisdictionLabel}</li>
          <li>
            {t(bi("البريد:", "Email:"))} {brand.supportEmail}
          </li>
        </LegalUl>
      </LegalSection>
    </LegalPageShell>
  );
}
