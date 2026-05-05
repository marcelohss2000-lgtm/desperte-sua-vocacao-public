import { Button } from "@/components/ui/button";
import { Check, BookOpen, Video, Headphones, Podcast, FileText, Sparkles, Heart, Compass, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";

// REBUILD FORCE v8 - COMPLETE REWRITE - NO FORM - DIRECT KIWIFY LINK
// Timestamp: 2026-05-04T23:40:00Z
// This component has NO email form, NO handleSubmit, NO state for email
// Button is ONLY a direct link to Kiwify checkout

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-bold text-white">Desperte Sua Vocação</span>
          </div>
          <Button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
          >
            Acessar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Você sente que está vivendo a vida <span className="text-amber-400">errada?</span>
                </h1>
                <p className="text-xl text-blue-100">
                  Descubra o chamado único que existe dentro de você e comece a viver com propósito real — não no piloto automático.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider">Você reconhece alguma dessas situações?</p>
                <ul className="space-y-2">
                  {[
                    "Tem um emprego estável, mas sente uma inquietação persistente",
                    "Seus talentos naturais estão adormecidos, desperdiçados",
                    "Medo de chegar ao fim da vida e perceber que viveu a vida esperada, não a sua",
                    "Ouve um chamado interior que não consegue nomear"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-blue-50">
                      <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <p className="text-sm text-amber-300 font-semibold mb-4">
                  ✨ Essa inquietação não é fraqueza. É o eco de um chamado interior pedindo para ser ouvido.
                </p>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/puZkaHRRyJVDbNtpUCohhq/sandbox/2lSUdCnjj7dRcMbAKbBoem-img-1_1770680954000_na1fn_aGVyby12b2NhY2Fv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcHVaa2FIUlJ5SlZEYk50cFVDb2hocS9zYW5kYm94LzJsU1VkQ25qajdkUmNNYkFLYkJvZW0taW1nLTFfMTc3MDY4MDk1NDAwMF9uYTFmbl9hR1Z5YnkxMmIyTmhZMkZ2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=L4Ay8VqCkSp2Konxr58DvtyI~nusgJAP3oNPWGtdqQAsVd7mpRlSgeLWDJL071Bj~4DVwFKJK3-Y76hi74JQdus2CeCtoY4oo7hK4gI3W2GtGlysAGxlOKc9a6bl5oF7AccjResTkU1bITV1-5f9t3nKodn4wbmCwH8J918PkloNV4K-em-m4xs7foS9sTWDXGG-aVb6JHYV5vVyb~znUPS-WYPDUm-l5gsnQx1h2ky8yGQ0Jce2hpqQMvQ4HwuIt3YAZSOdQDRVgI0K1FvyogpZ4lolSlvO~iW8ZCV50bwQvBeMbNe0uGSWf8~tkooVKvsoQtv7bRzjENudlwN4vA__"
                alt="Despertar Vocação"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Redefinition Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Vocação Não É Emprego.<br />
              <span className="text-amber-400">É Chamado.</span>
            </h2>

            <p className="text-lg text-blue-100">
              Nossa cultura reduziu "vocação" a "escolha de profissão". Mas a raiz da palavra, <em>vocare</em>, significa <strong>"chamar"</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  title: "Não é apenas",
                  items: ["Uma carreira", "Uma lista de habilidades", "Um teste vocacional rápido"]
                },
                {
                  title: "É um",
                  items: ["Chamado que você escuta", "Algo que você discerne", "Uma resposta que você oferece"]
                },
                {
                  title: "Feito em um mundo",
                  items: ["Barulhento", "Distraído", "Que nos empurra para status, não para sentido"]
                }
              ].map((col, idx) => (
                <div key={idx} className="bg-blue-900/50 backdrop-blur p-6 rounded-lg border border-blue-500/30">
                  <h3 className="text-amber-400 font-bold mb-4">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item, i) => (
                      <li key={i} className="text-blue-50 flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-xl text-amber-300 pt-8 font-semibold">
              E se houvesse um caminho estruturado para ouvir esse chamado?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Apresentamos: <span className="text-amber-400">Desperte Sua Vocação</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Um caminho estruturado de discernimento vocacional que une conteúdo profundo e prática guiada.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg text-blue-100 leading-relaxed">
              Não é um curso rápido de autoajuda. É um <strong className="text-amber-400">mapa para a jornada da sua alma</strong> — baseado em autores como <strong>Viktor Frankl</strong>, <strong>Teresa d'Ávila</strong>, <strong>Jung</strong>, <strong>Rick Warren</strong> e <strong>N.T. Wright</strong>, traduzidos com linguagem clara e exemplos práticos.
            </p>
          </div>

          {/* Product Image */}
          <div className="mb-16 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-amber-400/30 max-w-2xl w-full">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663159158705/STaNXRFA9foEsn7KhNuVwF/produto_desperte_vocacao_1fa5f4fd.png" 
                alt="Desperte Sua Vocação - Produto Digital" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Core Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Núcleo Principal:</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Ebook Completo",
                  subtitle: "Desperte Sua Vocação – O Caminho Iluminado",
                  description: "Um mapa para a jornada da sua alma, cobrindo desejo de sentido, Grande História, castelo interior, individuação, vocação, sofrimento, amor, missão e legado."
                },
                {
                  icon: Video,
                  title: "Vídeo Inspiracional",
                  subtitle: "Desperte Sua Vocação",
                  description: "Sintetiza os pilares do ebook em uma mensagem clara e visualmente envolvente. Apresenta os 3 caminhos para o sentido segundo Viktor Frankl."
                },
                {
                  icon: Headphones,
                  title: "Áudio Completo",
                  subtitle: "Mais de 2 horas de conteúdo",
                  description: "Ouça no carro, na caminhada, nas tarefas do dia a dia. Conteúdo absorvido pela escuta, entrando no coração pela repetição."
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-blue-900/30 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:border-amber-400/50 transition-all hover:shadow-lg hover:shadow-amber-400/20">
                    <Icon className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-amber-300 font-semibold mb-3">{item.subtitle}</p>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur border border-amber-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-300 mb-6">+ Bônus Exclusivos:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Podcast,
                  title: "Podcast Exclusivo",
                  description: "~14 minutos de conteúdo áudio exclusivo que sintetiza os pilares da jornada vocacional."
                },
                {
                  icon: FileText,
                  title: "Fichário Prático",
                  description: "Workbook em PDF com exercícios de reflexão, escrita, oração e decisão para transformar ideias em ação concreta."
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-amber-50 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - DIRECT KIWIFY LINK ONLY */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Pronto para Despertar Sua Vocação?
            </h2>
            <div className="bg-gradient-to-br from-amber-500/20 to-blue-500/20 backdrop-blur border border-amber-400/50 rounded-2xl p-12">
              <p className="text-3xl font-bold text-white mb-2">R$ 97</p>
              <p className="text-blue-100 mb-6">Acesso completo a todo o material</p>

              <div className="bg-blue-900/50 rounded-lg p-6 mb-8 text-left">
                <p className="text-sm text-blue-200 font-semibold mb-3">Você recebe:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Ebook completo (~95 páginas)",
                    "Vídeo inspiracional (HD)",
                    "Áudio completo (2+ horas)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-blue-50">
                      <Check className="w-4 h-4 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-blue-700 pt-4">
                  <p className="text-xs text-amber-300 font-semibold mb-2">+ BÔNUS EXCLUSIVOS:</p>
                  <ul className="space-y-2">
                    {[
                      "Podcast exclusivo (~14 minutos)",
                      "Fichário prático (Workbook em PDF)"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-amber-50">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* THIS IS THE ONLY CTA - DIRECT LINK TO KIWIFY */}
              <button
                onClick={() => {
                  window.open('https://kiwify.app/cU9GAE0', '_blank', 'noopener,noreferrer');
                }}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/50 mb-6 text-center cursor-pointer border-none"
              >
                Quero Acessar Agora - R$ 97
              </button>

              <p className="text-xs text-blue-300 mt-4 text-center">
                Dúvidas? Envie um email para <a href="mailto:Contato@conquista22produtosdigitais.com" className="text-amber-400 hover:text-amber-300 font-semibold">Contato@conquista22produtosdigitais.com</a>
              </p>
            </div>

            <p className="text-blue-100 text-lg">
              <span className="text-amber-400 font-semibold">✨ Investimento único</span> que pode transformar como você vê sua vida e seu propósito.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {[
              {
                question: "Como funciona o acesso ao material?",
                answer: "Após a compra, você recebe um email com links para download do ebook, vídeo e áudio. Você pode acessar quantas vezes quiser."
              },
              {
                question: "Funciona em qualquer dispositivo?",
                answer: "Sim! O ebook é PDF (compatível com qualquer dispositivo), o vídeo é em MP4 (pode assistir em celular, tablet ou computador) e o áudio é em MP3."
              },
              {
                question: "Há reembolso se eu não gostar?",
                answer: "Sim. Você tem 7 dias após a compra para solicitar reembolso total, sem perguntas. Basta enviar um email para Contato@conquista22produtosdigitais.com"
              },
              {
                question: "Esse produto é para mim?",
                answer: "Se você sente que há mais na vida do que está vivendo, se busca sentido e propósito, se quer entender seu chamado único — sim, é para você."
              },
              {
                question: "Quanto tempo leva para completar?",
                answer: "Não há prazo fixo. O ebook tem cerca de 95 páginas (2-3 horas de leitura). O áudio tem 2+ horas. O workbook é prático e pode ser feito no seu ritmo. Recomendamos dedicar 2-4 semanas para uma jornada completa, mas você pode ir mais rápido ou mais lento conforme necessário."
              },
              {
                question: "Qual é o diferencial desse produto?",
                answer: "Este não é um 'curso rápido'. É um caminho estruturado que integra espiritualidade, psicologia, filosofia e vida prática. Baseado em autores renomados como Viktor Frankl, Teresa d'Ávila e Jung, com linguagem clara e exemplos práticos. O workbook transforma ideias em ações concretas."
              },
              {
                question: "Há suporte ou comunidade após a compra?",
                answer: "Sim! Você pode entrar em contato conosco em Contato@conquista22produtosdigitais.com para dúvidas ou sugestões. Estamos aqui para apoiar sua jornada."
              },
              {
                question: "Posso compartilhar com outras pessoas?",
                answer: "O material é para uso pessoal. Se você conhece alguém que possa se beneficiar, convide-o a adquirir sua própria cópia — assim você apoia nosso trabalho de criar conteúdo de qualidade."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-blue-900/30 backdrop-blur border border-blue-500/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-900/50 transition-colors"
                >
                  <span className="text-left font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-blue-900/20 border-t border-blue-500/20 text-blue-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900/50 to-slate-900/50 backdrop-blur border border-blue-500/30 rounded-xl p-8 text-center">
            <p className="text-blue-100 mb-4">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <a
              href="mailto:Contato@conquista22produtosdigitais.com"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/50"
            >
              Enviar um Email: Contato@conquista22produtosdigitais.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-8">
        <div className="container text-center text-blue-300 text-sm">
          <p>© 2026 Desperte Sua Vocação. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com propósito e clareza.</p>
        </div>
      </footer>
    </div>
  );
}
