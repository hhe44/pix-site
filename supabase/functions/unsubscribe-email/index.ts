// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import axios from 'https://deno.land/x/redaxios@0.5.1/mod.ts';

const dc = Deno.env.get('MAILCHIMP_DATACENTER');
const listId = Deno.env.get('MAILCHIMP_LIST_ID');
const findMemberUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;
const mailchimpApiKey = Deno.env.get('MAILCHIMP_API_KEY');

const corsHeaders = {
	'Access-Control-Allow-Origin': 'https://www.pixfi.io',
	'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

serve(async (req) => {

	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders });
	}

	const { email } = await req.json();
	try {
		const data = {};
		const getResp = await axios.get(findMemberUrl, {
			headers: { authorization: `Basic ${mailchimpApiKey}` }
		});
		const user = getResp.data.members.filter((member) => member.email_address == email);
		if (!user || user.length == 0) {
			data.message = `${email} is not on the list!`;
			return new Response(JSON.stringify(data), {
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
				status: 400
			});
		}
		console.info(`${email} corresponds to MailChimp userId: ${user[0].id}`);
		const unsubscribeEmailUrl = `${findMemberUrl}/${user[0].id}`;
		const delResp = await axios.delete(unsubscribeEmailUrl, {
			headers: { authorization: `Basic ${mailchimpApiKey}` }
		});
		data.message = `${email} is not on the list!`;
		return new Response(JSON.stringify(data), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			status: 200
		});
		return new Response(
			`${email} has been unsubscribed!`,
			{ status: 200 },
			{ headers: corsHeaders }
		);
	} catch (e) {
		console.error(e.data);
		const { status, title } = e.data;
		return new Response(JSON.stringify(data), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			statusText: title,
			status
		});
	}
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
