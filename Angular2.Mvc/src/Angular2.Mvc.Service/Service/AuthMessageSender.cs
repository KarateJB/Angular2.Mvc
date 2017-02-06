using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;

namespace Angular2.Mvc.Service.Service
{
    /// <summary>
    /// Message Sender
    /// </summary>
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        /// <summary>
        /// Send a email
        /// </summary>
        /// <param name="email">Email address</param>
        /// <param name="subject">Subject</param>
        /// <param name="message">Message</param>
        /// <returns></returns>
        public Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Angular2.Mvc", "jb@theforce.com"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart("plain") { Text = message };

            using (var client = new SmtpClient())
            {
                client.LocalDomain = "service@wahlee.com";
                client.ConnectAsync("smtp.wahlee.com", 25, SecureSocketOptions.None).ConfigureAwait(false);
                client.SendAsync(emailMessage).ConfigureAwait(false);
                client.DisconnectAsync(true).ConfigureAwait(false);
            }

            return Task.FromResult(0);
        }

        /// <summary>
        /// Send a SMS
        /// </summary>
        /// <param name="number">Phone number</param>
        /// <param name="message">Message</param>
        /// <returns></returns>
        public Task SendSmsAsync(string number, string message)
        {
            // Plug in your SMS service here to send a text message.
            throw new NotImplementedException();
            return Task.FromResult(0);
        }
    }
}
