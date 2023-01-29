import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.0.0-rc.12';

interface SendEmailParams {
  recipients: string[];
  subject: string;
  body: string;
}

const sendEmail = async ({
  email,
  subject = "test",
  body = "hello",
}: SendEmailParams) => {
  await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Deno.env.get("SENDGRID_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        { to: 'hj392121@gmail.com', subject },
      ],
      from: {
        email: "team@pixfi.io",
        name: "Hank",
      },
      content: [{ type: "text/plain", value: body }],
    }),
  });
};

const corsHeaders = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST',
	'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
	'Access-Control-Allow-Headers':
		'apikey, X-Client-Info, Content-Type, Authorization, Accept, Accept-Language, X-Authorization'
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  const body = await req.json();
  const {email} = body;
  console.log(email);
  await sendEmail({
    email,
    body: "this is a test",
    subject: "this is a test",
  });
  return new Response(JSON.stringify({ success: true }), {
    headers: corsHeaders,
  });
});