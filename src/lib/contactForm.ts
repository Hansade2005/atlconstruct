const WIX_API_URL = 'https://www.wixapis.com/form-submission/v4/submissions';

// Function to generate a valid GUID (UUID v4)
function generateGUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData): Promise<void> {
  const authToken = import.meta.env.VITE_WIX_AUTH;

  if (!authToken) {
    throw new Error('Wix API authorization token not found. Please set VITE_WIX_AUTH in your environment variables.');
  }

  const payload = {
    submission: {
      formId: generateGUID(),
      submissions: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      }
    }
  };

  const response = await fetch(WIX_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authToken
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Form submission failed: ${response.status} ${response.statusText} - ${errorText}`);
  }

  // Assuming success, no need to return data unless specified
}