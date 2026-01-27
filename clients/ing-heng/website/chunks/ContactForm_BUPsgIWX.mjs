import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderScript, a as renderTemplate } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';
import { t } from './Footer_BoPJ3uP5.mjs';

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { lang, formId = "contact-form" } = Astro2.props;
  const equipmentOptions = [
    "Excavator",
    "Bulldozer",
    "Road Roller",
    "Lorry",
    "Forklift",
    "Container Truck",
    "Crane",
    "Generator",
    "Other"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-[6px_6px_0_#2D1810] p-8"> <form${addAttribute(formId, "id")} class="space-y-6" data-contact-form action="https://api.web3forms.com/submit" method="POST"> <!-- Web3Forms Access Key (Replace with actual key) --> <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY"> <input type="hidden" name="subject" value="New Equipment Financing Inquiry from Website"> <input type="hidden" name="from_name" value="Ing Heng Credit Website"> <!-- Name Field --> <div> <label for="name" class="form-label"> ${t("contact.form.name", lang)} <span class="text-red-600">*</span> </label> <input type="text" id="name" name="name" required class="form-input" placeholder="John Tan"> <p class="form-error hidden" data-error="name">Please enter your full name</p> </div> <!-- Email Field --> <div> <label for="email" class="form-label"> ${t("contact.form.email", lang)} <span class="text-red-600">*</span> </label> <input type="email" id="email" name="email" required class="form-input" placeholder="john@example.com"> <p class="form-error hidden" data-error="email">Please enter a valid email address</p> </div> <!-- Phone Field --> <div> <label for="phone" class="form-label"> ${t("contact.form.phone", lang)} <span class="text-red-600">*</span> </label> <input type="tel" id="phone" name="phone" required class="form-input" placeholder="+60 12-345 6789" pattern="[\+]?[0-9]{10,14}"> <p class="form-error hidden" data-error="phone">Please enter a valid phone number</p> </div> <!-- Equipment Type --> <div> <label for="equipment" class="form-label"> ${t("contact.form.equipment", lang)} <span class="text-red-600">*</span> </label> <select id="equipment" name="equipment" required class="form-input"> <option value="">Select equipment type...</option> ${equipmentOptions.map((option) => renderTemplate`<option${addAttribute(option, "value")}>${option}</option>`)} </select> <p class="form-error hidden" data-error="equipment">Please select an equipment type</p> </div> <!-- Message Field --> <div> <label for="message" class="form-label"> ${t("contact.form.message", lang)} </label> <textarea id="message" name="message" rows="4" class="form-input" placeholder="Tell us about your financing needs..."></textarea> </div> <!-- GDPR Consent --> <div class="flex items-start space-x-3"> <input type="checkbox" id="consent" name="consent" required class="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"> <label for="consent" class="text-sm text-gray-600">
I agree to the processing of my personal data for the purpose of handling my inquiry.
<a${addAttribute(`/${lang}/privacy`, "href")} class="text-primary hover:underline">Privacy Policy</a> </label> </div> <!-- Submit Button --> <button type="submit" class="btn btn-primary w-full" data-submit-button> <span data-submit-text>${t("contact.form.submit", lang)}</span> <span data-loading-text class="hidden">${t("contact.form.sending", lang)}</span> </button> <!-- Success Message --> <div class="hidden p-4 bg-green-50 border border-green-200 rounded-lg" data-success-message> <div class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <h4 class="font-semibold text-green-800">Success!</h4> <p class="text-sm text-green-700">${t("contact.form.success", lang)}</p> </div> </div> </div> <!-- Error Message --> <div class="hidden p-4 bg-red-50 border border-red-200 rounded-lg" data-error-message> <div class="flex items-start space-x-3"> <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> <div> <h4 class="font-semibold text-red-800">Error</h4> <p class="text-sm text-red-700">${t("contact.form.error", lang)}</p> </div> </div> </div> </form> </div> ${renderScript($$result, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/ContactForm.astro", void 0);

export { $$ContactForm as $ };
