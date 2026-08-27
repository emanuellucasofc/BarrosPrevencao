import { companyInfo } from '../data/companyInfo';

export function getWhatsAppUrl(customMessage?: string, useSecondary?: boolean): string {
  const defaultText = customMessage || "Olá! Gostaria de mais informações sobre os cursos e treinamentos da Barros Prevenção.";
  const encodedText = encodeURIComponent(defaultText);
  
  const rawNumber = useSecondary && companyInfo.whatsappSecondaryRawNumber
    ? companyInfo.whatsappSecondaryRawNumber
    : companyInfo.whatsappRawNumber;

  if (rawNumber && rawNumber.trim() !== '') {
    const cleanNumber = rawNumber.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}?text=${encodedText}`;
  }
  
  return `https://api.whatsapp.com/send?text=${encodedText}`;
}

export function getCourseWhatsAppUrl(courseTitle: string): string {
  const message = `Olá! Gostaria de receber mais informações e detalhes sobre o curso "${courseTitle}" da Barros Prevenção (Unidade Penha/RJ).`;
  return getWhatsAppUrl(message);
}

export function getCompanyTrainingWhatsAppUrl(): string {
  const message = `Olá! Gostaria de solicitar uma proposta de treinamento in company para a minha empresa com a Barros Prevenção.`;
  return getWhatsAppUrl(message);
}
