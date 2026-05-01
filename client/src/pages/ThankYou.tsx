import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Download, Sparkles, Heart, Compass, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function ThankYou() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <CheckCircle className="w-24 h-24 text-emerald-400 relative" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Bem-vindo ao Seu <span className="text-emerald-400">Despertar</span>
            </h1>
            <p className="text-xl text-emerald-100">
              Sua jornada para descobrir seu propósito verdadeiro começou agora.
            </p>
          </div>

          {/* Confirmation Message */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 backdrop-blur border border-emerald-500/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="text-lg font-bold text-white mb-2">Verifique seu Email</h2>
                <p className="text-emerald-100">
                  Um email com seu link de acesso foi enviado para você. Procure na caixa de entrada (ou spam) e clique no link para acessar todo o material.
                </p>
              </div>
            </div>

            <div className="border-t border-emerald-500/30 pt-6">
              <p className="text-sm text-emerald-300 font-semibold mb-4">Você recebeu acesso a:</p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "📖 Ebook completo (95 páginas)",
                  "🎥 Vídeo inspiracional (HD)",
                  "🎧 Áudio completo (2+ horas)",
                  "🎙️ Podcast exclusivo",
                  "📋 Fichário prático (Workbook)",
                  "♾️ Acesso vitalício"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-emerald-50">
                    <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Seus Próximos Passos</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: "1",
                  title: "Confirme seu Email",
                  description: "Clique no link de confirmação que enviamos para você",
                  icon: Mail
                },
                {
                  number: "2",
                  title: "Baixe o Material",
                  description: "Acesse todos os arquivos: ebook, vídeo, áudio e workbook",
                  icon: Download
                },
                {
                  number: "3",
                  title: "Comece a Jornada",
                  description: "Dedique tempo para ler, ouvir e refletir sobre seu chamado",
                  icon: Compass
                }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="bg-blue-900/30 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:border-emerald-400/50 transition-all">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mb-4">
                      <span className="text-emerald-400 font-bold">{step.number}</span>
                    </div>
                    <Icon className="w-6 h-6 text-emerald-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-blue-100 text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-900/30 backdrop-blur border border-amber-500/30 rounded-xl p-6 text-left">
            <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Dicas Importantes
            </h3>
            <ul className="space-y-3">
              {[
                "Não é uma corrida. Leia o ebook com calma, deixe o conteúdo penetrar.",
                "Use o workbook para processar suas reflexões. A escrita é transformadora.",
                "Ouça o áudio enquanto caminha ou trabalha — a absorção é diferente.",
                "Se tiver dúvidas, responderemos com prazer. Envie um email para Contato@conquista22produtosdigitais.com"
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3 text-amber-50">
                  <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4 pt-8">
            <p className="text-emerald-100 text-lg">
              Sua jornada para descobrir seu propósito verdadeiro começou. <span className="text-emerald-400 font-semibold">Bem-vindo.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://kiwify.app/8NpcUiT"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/50 flex items-center gap-2 justify-center"
              >
                Acessar Meu Produto
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="mailto:Contato@conquista22produtosdigitais.com"
                className="bg-blue-900/50 hover:bg-blue-800/50 text-white font-semibold px-8 py-6 rounded-lg transition-all border border-blue-500/50 hover:border-blue-400 flex items-center gap-2 justify-center"
              >
                <Mail className="w-4 h-4" />
                Enviar Mensagem
              </a>
            </div>
          </div>

          {/* Footer Message */}
          <div className="pt-12 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              Gratidão por escolher "Desperte Sua Vocação". Sua decisão de buscar propósito é o primeiro passo para uma vida transformada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
