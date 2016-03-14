The Internet Layer encapsulates each TCP segment into an IP packet by adding a header that includes (among other data) the destination IP address.

Transmission Control Protocol accepts data from a data stream, divides it into chunks, and adds a TCP header creating a TCP segment. The TCP segment is then encapsulated into an Internet Protocol (IP) datagram, and exchanged with peers.

Processes transmit data by calling on the TCP and passing buffers of data as arguments. The TCP packages the data from these buffers into segments and calls on the internet module [e.g. IP] to transmit each segment to the destination TCP.

## TCP Header

Source port (16 bits)

Destination port (16 bits)

Sequence number (32 bits)

Acknowledgment number (32 bits)

Data offset (4 bits)

specifies the size of the TCP header in 32-bit words. The minimum size header is 5 words and the maximum is 15 words thus giving the minimum size of 20 bytes and maximum of 60 bytes, allowing for up to 40 bytes of options in the header. This field gets its name from the fact that it is also the offset from the start of the TCP segment to the actual data.

Reserved (3 bits)

Flags (9 bits) (aka Control bits)

Window size (16 bits)

Checksum (16 bits)

Urgent pointer (16 bits)

Options (Variable 0-320 bits, divisible by 32)

The length of this field is determined by the data offset field. 




To establish a connection, TCP uses a three-way handshake

1. SYN

2. SYN-ACK

3. ACK

The connection termination phase uses a four-way handshake.
It is also possible to terminate the connection by a 3-way handshake.


TCP VS UDP

- Ordered data transfer

- Retransmission of lost packets

- Error-free data transfer

- Flow control

- Congestion control

